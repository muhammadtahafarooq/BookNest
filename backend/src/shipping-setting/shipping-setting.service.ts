import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShippingSettingDto } from './dto/create-shipping-setting.dto';
import { UpdateShippingSettingDto } from './dto/update-shipping-setting.dto';

@Injectable()
export class ShippingSettingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateShippingSettingDto) {
    return this.prisma.shippingSetting.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.shippingSetting.findMany({ skip, take }),
      this.prisma.shippingSetting.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.shippingSetting.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('ShippingSetting not found');
    return record;
  }

  async update(id: string, data: UpdateShippingSettingDto) {
    await this.findOne(id);
    return this.prisma.shippingSetting.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.shippingSetting.delete({ where: { id } });
    return { message: 'ShippingSetting deleted successfully' };
  }
}
