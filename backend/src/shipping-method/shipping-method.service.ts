import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShippingMethodDto } from './dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping-method.dto';

@Injectable()
export class ShippingMethodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateShippingMethodDto) {
    return this.prisma.shippingMethod.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.shippingMethod.findMany({ skip, take }),
      this.prisma.shippingMethod.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.shippingMethod.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('ShippingMethod not found');
    return record;
  }

  async update(id: string, data: UpdateShippingMethodDto) {
    await this.findOne(id);
    return this.prisma.shippingMethod.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.shippingMethod.delete({ where: { id } });
    return { message: 'ShippingMethod deleted successfully' };
  }
}
