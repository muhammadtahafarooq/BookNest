import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { InventoryStatus } from '@prisma/client';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  bookId: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  lowStockLevel?: number;

  @IsOptional()
  @IsEnum(InventoryStatus)
  status?: InventoryStatus;
}
