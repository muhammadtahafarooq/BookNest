import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly selectFields = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    password: false,
    phone: true,
    role: true,
    emailVerified: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
  };

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.user.findMany({ skip, take, select: this.selectFields }),
      this.prisma.user.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.user.findUnique({ where: { id }, select: this.selectFields });
    if (!record) throw new NotFoundException('User not found');
    return record;
  }

  async update(id: string, data: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
    return { message: 'User deleted successfully' };
  }
}
