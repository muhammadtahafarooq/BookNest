import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookDto) {
    return this.prisma.book.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const include = {
      category: true,
      author: true,
      publisher: true,
      images: true,
    };
    const [data, total] = await Promise.all([
      this.prisma.book.findMany({ skip, take, include }),
      this.prisma.book.count(),
    ]);
    return {
      data,
      meta: { total, page, limit: take, totalPages: Math.ceil(total / take) },
    };
  }

  async findOne(id: string) {
    const include = {
      category: true,
      author: true,
      publisher: true,
      images: true,
    };
    const record = await this.prisma.book.findUnique({
      where: { id },
      include,
    });
    if (!record) throw new NotFoundException('Book not found');
    return record;
  }

  async update(id: string, data: UpdateBookDto) {
    await this.findOne(id);
    return this.prisma.book.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.book.delete({ where: { id } });
    return { message: 'Book deleted successfully' };
  }
}
