import { Exclude, Expose } from 'class-transformer';

export class AuthorResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  biography: string;

  @Expose()
  image: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
