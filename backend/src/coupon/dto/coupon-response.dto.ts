import { Exclude, Expose } from 'class-transformer';
import { DiscountType } from '@prisma/client';

export class CouponResponseDto {
  @Expose()
  id: string;

  @Expose()
  code: string;

  @Expose()
  description: string;

  @Expose()
  discountType: DiscountType;

  @Expose()
  discountValue: number;

  @Expose()
  minimumAmount: number;

  @Expose()
  maximumDiscount: number;

  @Expose()
  usageLimit: number;

  @Expose()
  usedCount: number;

  @Expose()
  active: boolean;

  @Expose()
  startDate: Date;

  @Expose()
  expiryDate: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
