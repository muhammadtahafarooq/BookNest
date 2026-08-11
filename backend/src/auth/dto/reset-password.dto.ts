import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty({ description: 'Reset token returned by forgot-password endpoint' })
  @IsNotEmpty()
  @IsString()
  token: string;

  @ApiProperty({ example: 'NewPassword8!', minLength: 8 })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  newPassword: string;
}
