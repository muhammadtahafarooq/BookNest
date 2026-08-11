import { Exclude, Expose } from 'class-transformer';

export class WishlistResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  bookId: string;

  @Expose()
  createdAt: Date;
}
