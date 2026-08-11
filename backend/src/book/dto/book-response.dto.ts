import { Exclude, Expose } from 'class-transformer';
import { BookCondition, BookLanguage } from '@prisma/client';

export class BookResponseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  slug: string;

  @Expose()
  isbn: string;

  @Expose()
  description: string;

  @Expose()
  language: BookLanguage;

  @Expose()
  condition: BookCondition;

  @Expose()
  price: number;

  @Expose()
  comparePrice: number;

  @Expose()
  pages: number;

  @Expose()
  publicationYear: number;

  @Expose()
  featured: boolean;

  @Expose()
  active: boolean;

  @Expose()
  categoryId: string;

  @Expose()
  authorId: string;

  @Expose()
  publisherId: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
