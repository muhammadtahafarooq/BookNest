import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { UpdateRefreshTokenDto } from './dto/update-refresh-token.dto';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRefreshTokenDto) {
    return this.prisma.refreshToken.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.refreshToken.findMany({ skip, take }),
      this.prisma.refreshToken.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.refreshToken.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('RefreshToken not found');
    return record;
  }

  async update(id: string, data: UpdateRefreshTokenDto) {
    await this.findOne(id);
    return this.prisma.refreshToken.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.refreshToken.delete({ where: { id } });
    return { message: 'RefreshToken deleted successfully' };
  }
}
