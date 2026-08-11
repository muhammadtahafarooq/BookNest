import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppSettingDto } from './dto/create-app-setting.dto';
import { UpdateAppSettingDto } from './dto/update-app-setting.dto';

@Injectable()
export class AppSettingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAppSettingDto) {
    return this.prisma.appSetting.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.appSetting.findMany({ skip, take }),
      this.prisma.appSetting.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.appSetting.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('AppSetting not found');
    return record;
  }

  async update(id: string, data: UpdateAppSettingDto) {
    await this.findOne(id);
    return this.prisma.appSetting.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.appSetting.delete({ where: { id } });
    return { message: 'AppSetting deleted successfully' };
  }
}
