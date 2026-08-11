import { Exclude, Expose } from 'class-transformer';

export class ShippingSettingResponseDto {
  @Expose()
  id: string;

  @Expose()
  key: string;

  @Expose()
  value: string;

  @Expose()
  description: string;

  @Expose()
  updatedAt: Date;
}
