import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  orderNumber: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsNotEmpty()
  @IsString()
  addressId: string;

  @IsOptional()
  @IsString()
  couponId?: string;

  @IsOptional()
  @IsString()
  shippingMethodId?: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsNotEmpty()
  @IsNumber()
  subtotal: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsNumber()
  shippingCost?: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsOptional()
  @IsString()
  notes?: string;
}
