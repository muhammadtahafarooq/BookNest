import { Exclude, Expose } from 'class-transformer';

export class OrderItemResponseDto {
  @Expose()
  id: string;

  @Expose()
  orderId: string;

  @Expose()
  bookId: string;

  @Expose()
  quantity: number;

  @Expose()
  price: number;

  @Expose()
  subtotal: number;

  @Expose()
  createdAt: Date;
}
