import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAuthorDto) {
    return this.prisma.author.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.author.findMany({ skip, take }),
      this.prisma.author.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.author.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Author not found');
    return record;
  }

  async update(id: string, data: UpdateAuthorDto) {
    await this.findOne(id);
    return this.prisma.author.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.author.delete({ where: { id } });
    return { message: 'Author deleted successfully' };
  }
}
