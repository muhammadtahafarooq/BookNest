import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBannerDto) {
    return this.prisma.banner.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.banner.findMany({ skip, take }),
      this.prisma.banner.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.banner.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Banner not found');
    return record;
  }

  async update(id: string, data: UpdateBannerDto) {
    await this.findOne(id);
    return this.prisma.banner.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.banner.delete({ where: { id } });
    return { message: 'Banner deleted successfully' };
  }
}
