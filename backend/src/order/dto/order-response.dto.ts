import { Exclude, Expose } from 'class-transformer';
import { OrderStatus } from '@prisma/client';

export class OrderResponseDto {
  @Expose()
  id: string;

  @Expose()
  orderNumber: string;

  @Expose()
  userId: string;

  @Expose()
  addressId: string;

  @Expose()
  couponId: string;

  @Expose()
  shippingMethodId: string;

  @Expose()
  status: OrderStatus;

  @Expose()
  subtotal: number;

  @Expose()
  discount: number;

  @Expose()
  shippingCost: number;

  @Expose()
  total: number;

  @Expose()
  notes: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
