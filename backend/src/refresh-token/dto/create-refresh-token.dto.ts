import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateRefreshTokenDto {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsDateString()
  expiresAt: Date;
}
