import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DiscountType } from '@prisma/client';

export class CreateCouponDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsEnum(DiscountType)
  discountType: DiscountType;

  @IsNotEmpty()
  @IsNumber()
  discountValue: number;

  @IsOptional()
  @IsNumber()
  minimumAmount?: number;

  @IsOptional()
  @IsNumber()
  maximumDiscount?: number;

  @IsOptional()
  @IsNumber()
  usageLimit?: number;

  @IsOptional()
  @IsNumber()
  usedCount?: number;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  expiryDate: Date;
}
