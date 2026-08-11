import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentSettingDto } from './dto/create-payment-setting.dto';
import { UpdatePaymentSettingDto } from './dto/update-payment-setting.dto';

@Injectable()
export class PaymentSettingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePaymentSettingDto) {
    return this.prisma.paymentSetting.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.paymentSetting.findMany({ skip, take }),
      this.prisma.paymentSetting.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.paymentSetting.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('PaymentSetting not found');
    return record;
  }

  async update(id: string, data: UpdatePaymentSettingDto) {
    await this.findOne(id);
    return this.prisma.paymentSetting.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.paymentSetting.delete({ where: { id } });
    return { message: 'PaymentSetting deleted successfully' };
  }
}
