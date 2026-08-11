import { Exclude, Expose } from 'class-transformer';

export class BookImageResponseDto {
  @Expose()
  id: string;

  @Expose()
  bookId: string;

  @Expose()
  imageUrl: string;

  @Expose()
  altText: string;

  @Expose()
  isPrimary: boolean;

  @Expose()
  sortOrder: number;

  @Expose()
  createdAt: Date;
}
