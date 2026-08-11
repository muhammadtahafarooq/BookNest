import { Exclude, Expose } from 'class-transformer';

export class CustomerAnalyticsResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  totalOrders: number;

  @Expose()
  totalSpent: number;

  @Expose()
  lastOrderDate: Date;

  @Expose()
  updatedAt: Date;
}
