import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const include = {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        },
      },
      address: true,
      items: { include: { book: true } },
      payment: true,
      shippingMethod: true,
      coupon: true,
    };
    const [data, total] = await Promise.all([
      this.prisma.order.findMany({ skip, take, include }),
      this.prisma.order.count(),
    ]);
    return {
      data,
      meta: { total, page, limit: take, totalPages: Math.ceil(total / take) },
    };
  }

  async findOne(id: string) {
    const include = {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
        },
      },
      address: true,
      items: { include: { book: true } },
      payment: true,
      shippingMethod: true,
      coupon: true,
    };
    const record = await this.prisma.order.findUnique({
      where: { id },
      include,
    });
    if (!record) throw new NotFoundException('Order not found');
    return record;
  }

  async update(id: string, data: UpdateOrderDto) {
    await this.findOne(id);
    return this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.order.delete({ where: { id } });
    return { message: 'Order deleted successfully' };
  }
}
