import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCartDto) {
    return this.prisma.cart.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.cart.findMany({ skip, take }),
      this.prisma.cart.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.cart.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Cart not found');
    return record;
  }

  async update(id: string, data: UpdateCartDto) {
    await this.findOne(id);
    return this.prisma.cart.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.cart.delete({ where: { id } });
    return { message: 'Cart deleted successfully' };
  }
}
