import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateNotificationDto) {
    return this.prisma.notification.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.notification.findMany({ skip, take }),
      this.prisma.notification.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.notification.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Notification not found');
    return record;
  }

  async update(id: string, data: UpdateNotificationDto) {
    await this.findOne(id);
    return this.prisma.notification.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.notification.delete({ where: { id } });
    return { message: 'Notification deleted successfully' };
  }
}
