import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCustomerAnalyticsDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsNumber()
  totalOrders?: number;

  @IsOptional()
  @IsNumber()
  totalSpent?: number;

  @IsOptional()
  @IsDateString()
  lastOrderDate?: Date;
}
