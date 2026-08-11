import { Exclude, Expose } from 'class-transformer';
import { InventoryStatus } from '@prisma/client';

export class InventoryResponseDto {
  @Expose()
  id: string;

  @Expose()
  bookId: string;

  @Expose()
  sku: string;

  @Expose()
  quantity: number;

  @Expose()
  lowStockLevel: number;

  @Expose()
  status: InventoryStatus;

  @Expose()
  updatedAt: Date;
}
