import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';

@Injectable()
export class PublisherService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePublisherDto) {
    return this.prisma.publisher.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.publisher.findMany({ skip, take }),
      this.prisma.publisher.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.publisher.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Publisher not found');
    return record;
  }

  async update(id: string, data: UpdatePublisherDto) {
    await this.findOne(id);
    return this.prisma.publisher.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.publisher.delete({ where: { id } });
    return { message: 'Publisher deleted successfully' };
  }
}
