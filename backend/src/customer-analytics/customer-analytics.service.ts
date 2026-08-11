import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerAnalyticsDto } from './dto/create-customer-analytics.dto';
import { UpdateCustomerAnalyticsDto } from './dto/update-customer-analytics.dto';

@Injectable()
export class CustomerAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCustomerAnalyticsDto) {
    return this.prisma.customerAnalytics.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.customerAnalytics.findMany({ skip, take }),
      this.prisma.customerAnalytics.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.customerAnalytics.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('CustomerAnalytics not found');
    return record;
  }

  async update(id: string, data: UpdateCustomerAnalyticsDto) {
    await this.findOne(id);
    return this.prisma.customerAnalytics.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.customerAnalytics.delete({ where: { id } });
    return { message: 'CustomerAnalytics deleted successfully' };
  }
}
