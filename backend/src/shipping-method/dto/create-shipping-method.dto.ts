import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ShippingType } from '@prisma/client';

export class CreateShippingMethodDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(ShippingType)
  type: ShippingType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  estimatedDays?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
