import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalesReportDto } from './dto/create-sales-report.dto';
import { UpdateSalesReportDto } from './dto/update-sales-report.dto';

@Injectable()
export class SalesReportService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSalesReportDto) {
    return this.prisma.salesReport.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.salesReport.findMany({ skip, take }),
      this.prisma.salesReport.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.salesReport.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('SalesReport not found');
    return record;
  }

  async update(id: string, data: UpdateSalesReportDto) {
    await this.findOne(id);
    return this.prisma.salesReport.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.salesReport.delete({ where: { id } });
    return { message: 'SalesReport deleted successfully' };
  }
}
