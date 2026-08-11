import { Exclude, Expose } from 'class-transformer';

export class SalesReportResponseDto {
  @Expose()
  id: string;

  @Expose()
  reportDate: Date;

  @Expose()
  totalOrders: number;

  @Expose()
  totalSales: number;

  @Expose()
  totalCustomers: number;

  @Expose()
  createdAt: Date;
}
