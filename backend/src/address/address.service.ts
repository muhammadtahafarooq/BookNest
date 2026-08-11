import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAddressDto) {
    return this.prisma.address.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.address.findMany({ skip, take }),
      this.prisma.address.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.address.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('Address not found');
    return record;
  }

  async update(id: string, data: UpdateAddressDto) {
    await this.findOne(id);
    return this.prisma.address.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.address.delete({ where: { id } });
    return { message: 'Address deleted successfully' };
  }
}
