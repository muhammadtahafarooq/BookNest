import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';

@Injectable()
export class BlogPostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBlogPostDto) {
    return this.prisma.blogPost.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.blogPost.findMany({ skip, take }),
      this.prisma.blogPost.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.blogPost.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('BlogPost not found');
    return record;
  }

  async update(id: string, data: UpdateBlogPostDto) {
    await this.findOne(id);
    return this.prisma.blogPost.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.blogPost.delete({ where: { id } });
    return { message: 'BlogPost deleted successfully' };
  }
}
