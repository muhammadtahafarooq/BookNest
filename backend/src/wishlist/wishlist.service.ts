import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateWishlistDto) {
    return this.prisma.wishlist.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const include = { book: { include: { images: true } } };
    const [data, total] = await Promise.all([
      this.prisma.wishlist.findMany({ skip, take, include }),
      this.prisma.wishlist.count(),
    ]);
    return {
      data,
      meta: { total, page, limit: take, totalPages: Math.ceil(total / take) },
    };
  }

  async findOne(id: string) {
    const include = { book: { include: { images: true } } };
    const record = await this.prisma.wishlist.findUnique({
      where: { id },
      include,
    });
    if (!record) throw new NotFoundException('Wishlist not found');
    return record;
  }

  async update(id: string, data: UpdateWishlistDto) {
    await this.findOne(id);
    return this.prisma.wishlist.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.wishlist.delete({ where: { id } });
    return { message: 'Wishlist deleted successfully' };
  }
}
