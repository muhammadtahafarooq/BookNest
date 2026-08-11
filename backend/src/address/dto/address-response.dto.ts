import { Exclude, Expose } from 'class-transformer';
import { AddressType } from '@prisma/client';

export class AddressResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  type: AddressType;

  @Expose()
  fullName: string;

  @Expose()
  phone: string;

  @Expose()
  country: string;

  @Expose()
  province: string;

  @Expose()
  city: string;

  @Expose()
  postalCode: string;

  @Expose()
  addressLine1: string;

  @Expose()
  addressLine2: string;

  @Expose()
  isDefault: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
