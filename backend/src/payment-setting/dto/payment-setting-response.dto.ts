import { Exclude, Expose } from 'class-transformer';

export class PaymentSettingResponseDto {
  @Expose()
  id: string;

  @Expose()
  provider: string;

  @Expose()
  enabled: boolean;

  @Expose()
  configuration: any;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
