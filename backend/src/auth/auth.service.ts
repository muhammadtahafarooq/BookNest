import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // ─── Safe user fields (never return password) ──────────────────────────────
  private readonly safeSelect = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    role: true,
    emailVerified: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
  };

  // ─── Register ───────────────────────────────────────────────────────────────
  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new ConflictException('Email already registered');

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: hashedPassword,
      },
      select: this.safeSelect,
    });

    const token = this.signToken(user);
    return { accessToken: token, user };
  }

  // ─── Login ──────────────────────────────────────────────────────────────────
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    if (!user.isActive)
      throw new UnauthorizedException('Account is deactivated');

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

    const safeUser = await this.prisma.user.findUnique({
      where: { id: user.id },
      select: this.safeSelect,
    });

    const token = this.signToken(safeUser!);
    return { accessToken: token, user: safeUser };
  }

  // ─── Forgot Password ────────────────────────────────────────────────────────
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    // Always return success to prevent email enumeration
    if (!user)
      return {
        message: 'If that email exists, a reset token has been issued.',
      };

    // Delete any existing reset tokens for this user
    await this.prisma.refreshToken.deleteMany({ where: { userId: user.id } });

    const resetToken = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.prisma.refreshToken.create({
      data: {
        token: resetToken,
        userId: user.id,
        expiresAt,
      },
    });

    // In production: send email with reset link
    if (process.env.NODE_ENV === 'production') {
      return {
        message: 'If that email exists, a reset token has been issued.',
      };
    }
    // For development: return token directly
    return {
      message:
        'Password reset token generated (dev mode — would be emailed in production).',
      resetToken,
      expiresAt,
    };
  }

  // ─── Reset Password ─────────────────────────────────────────────────────────
  async resetPassword(dto: ResetPasswordDto) {
    const record = await this.prisma.refreshToken.findUnique({
      where: { token: dto.token },
      include: { user: true },
    });

    if (!record)
      throw new BadRequestException('Invalid or expired reset token');
    if (record.expiresAt < new Date()) {
      await this.prisma.refreshToken.delete({ where: { token: dto.token } });
      throw new BadRequestException('Reset token has expired');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 12);
    await this.prisma.user.update({
      where: { id: record.userId },
      data: { password: hashedPassword },
    });

    await this.prisma.refreshToken.delete({ where: { token: dto.token } });

    return { message: 'Password reset successfully. You can now log in.' };
  }

  // ─── Sign JWT ────────────────────────────────────────────────────────────────
  private signToken(user: { id: string; email: string; role: string }) {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
  }
}
