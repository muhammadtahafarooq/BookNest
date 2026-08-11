import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSalesReportDto {
  @IsNotEmpty()
  @IsDateString()
  reportDate: Date;

  @IsNotEmpty()
  @IsNumber()
  totalOrders: number;

  @IsNotEmpty()
  @IsNumber()
  totalSales: number;

  @IsNotEmpty()
  @IsNumber()
  totalCustomers: number;
}
