import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCartItemDto) {
    return this.prisma.cartItem.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.cartItem.findMany({ skip, take }),
      this.prisma.cartItem.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.cartItem.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('CartItem not found');
    return record;
  }

  async update(id: string, data: UpdateCartItemDto) {
    await this.findOne(id);
    return this.prisma.cartItem.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.cartItem.delete({ where: { id } });
    return { message: 'CartItem deleted successfully' };
  }
}
