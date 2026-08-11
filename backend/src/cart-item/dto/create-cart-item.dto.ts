import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCartItemDto {
  @IsNotEmpty()
  @IsString()
  cartId: string;

  @IsNotEmpty()
  @IsString()
  bookId: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;
}
