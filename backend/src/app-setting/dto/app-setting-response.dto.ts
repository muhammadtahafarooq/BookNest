import { Exclude, Expose } from 'class-transformer';

export class AppSettingResponseDto {
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
