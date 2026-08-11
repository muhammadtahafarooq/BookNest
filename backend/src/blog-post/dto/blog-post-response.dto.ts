import { Exclude, Expose } from 'class-transformer';
import { BlogStatus } from '@prisma/client';

export class BlogPostResponseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  slug: string;

  @Expose()
  excerpt: string;

  @Expose()
  content: string;

  @Expose()
  coverImage: string;

  @Expose()
  status: BlogStatus;

  @Expose()
  authorId: string;

  @Expose()
  publishedAt: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
