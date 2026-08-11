import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePaymentSettingDto {
  @IsNotEmpty()
  @IsString()
  provider: string;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @IsOptional()
  configuration?: any;
}
