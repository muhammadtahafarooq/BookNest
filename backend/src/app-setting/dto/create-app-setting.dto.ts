import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAppSettingDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  @IsString()
  value: string;

  @IsOptional()
  @IsString()
  description?: string;
}
