import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookImageDto } from './dto/create-book-image.dto';
import { UpdateBookImageDto } from './dto/update-book-image.dto';

@Injectable()
export class BookImageService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookImageDto) {
    return this.prisma.bookImage.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.bookImage.findMany({ skip, take }),
      this.prisma.bookImage.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.bookImage.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('BookImage not found');
    return record;
  }

  async update(id: string, data: UpdateBookImageDto) {
    await this.findOne(id);
    return this.prisma.bookImage.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.bookImage.delete({ where: { id } });
    return { message: 'BookImage deleted successfully' };
  }
}
