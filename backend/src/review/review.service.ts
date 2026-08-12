import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateReviewDto) {
    return this.prisma.review.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const include = {
      book: { select: { id: true, title: true, slug: true } },
      user: { select: { id: true, firstName: true, lastName: true } },
    };
    const [data, total] = await Promise.all([
      this.prisma.review.findMany({ skip, take, include }),
      this.prisma.review.count(),
    ]);
    return {
      data,
      meta: { total, page, limit: take, totalPages: Math.ceil(total / take) },
    };
  }

  async findOne(id: string) {
    const include = {
      book: { select: { id: true, title: true, slug: true } },
      user: { select: { id: true, firstName: true, lastName: true } },
    };
    const record = await this.prisma.review.findUnique({
      where: { id },
      include,
    });
    if (!record) throw new NotFoundException('Review not found');
    return record;
  }

  async update(id: string, data: UpdateReviewDto) {
    await this.findOne(id);
    return this.prisma.review.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.review.delete({ where: { id } });
    return { message: 'Review deleted successfully' };
  }
}
