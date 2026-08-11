import { Exclude, Expose } from 'class-transformer';

export class CartResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
