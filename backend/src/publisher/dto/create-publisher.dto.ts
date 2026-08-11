import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePublisherDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
