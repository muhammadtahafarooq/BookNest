import { Exclude, Expose } from 'class-transformer';
import { ShippingType } from '@prisma/client';

export class ShippingMethodResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  type: ShippingType;

  @Expose()
  description: string;

  @Expose()
  price: number;

  @Expose()
  estimatedDays: string;

  @Expose()
  active: boolean;

  @Expose()
  createdAt: Date;
}
