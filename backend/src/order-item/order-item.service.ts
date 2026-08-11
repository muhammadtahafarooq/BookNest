import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderItemDto) {
    return this.prisma.orderItem.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.orderItem.findMany({ skip, take }),
      this.prisma.orderItem.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.orderItem.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('OrderItem not found');
    return record;
  }

  async update(id: string, data: UpdateOrderItemDto) {
    await this.findOne(id);
    return this.prisma.orderItem.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.orderItem.delete({ where: { id } });
    return { message: 'OrderItem deleted successfully' };
  }
}
