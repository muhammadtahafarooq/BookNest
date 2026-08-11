import { Exclude, Expose } from 'class-transformer';

export class CartItemResponseDto {
  @Expose()
  id: string;

  @Expose()
  cartId: string;

  @Expose()
  bookId: string;

  @Expose()
  quantity: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
