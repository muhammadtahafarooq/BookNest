import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFAQDto } from './dto/update-faq.dto';

@Injectable()
export class FAQService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFAQDto) {
    return this.prisma.fAQ.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.fAQ.findMany({ skip, take }),
      this.prisma.fAQ.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.fAQ.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('FAQ not found');
    return record;
  }

  async update(id: string, data: UpdateFAQDto) {
    await this.findOne(id);
    return this.prisma.fAQ.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.fAQ.delete({ where: { id } });
    return { message: 'FAQ deleted successfully' };
  }
}
