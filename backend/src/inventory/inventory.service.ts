import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateInventoryDto) {
    return this.prisma.inventory.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.inventory.findMany({ skip, take }),
      this.prisma.inventory.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.inventory.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Inventory not found');
    return record;
  }

  async update(id: string, data: UpdateInventoryDto) {
    await this.findOne(id);
    return this.prisma.inventory.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.inventory.delete({ where: { id } });
    return { message: 'Inventory deleted successfully' };
  }
}
