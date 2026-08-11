import { Exclude, Expose } from 'class-transformer';

export class RefreshTokenResponseDto {
  @Expose()
  id: string;

  @Expose()
  token: string;

  @Expose()
  userId: string;

  @Expose()
  expiresAt: Date;

  @Expose()
  createdAt: Date;
}
