import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePaymentDto) {
    return this.prisma.payment.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.payment.findMany({ skip, take }),
      this.prisma.payment.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.payment.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Payment not found');
    return record;
  }

  async update(id: string, data: UpdatePaymentDto) {
    await this.findOne(id);
    return this.prisma.payment.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.payment.delete({ where: { id } });
    return { message: 'Payment deleted successfully' };
  }
}
