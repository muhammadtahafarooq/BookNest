import { Exclude, Expose } from 'class-transformer';
import { ReviewStatus } from '@prisma/client';

export class ReviewResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  bookId: string;

  @Expose()
  rating: number;

  @Expose()
  comment: string;

  @Expose()
  status: ReviewStatus;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
