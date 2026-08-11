import { Exclude, Expose } from 'class-transformer';

export class CategoryResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  slug: string;

  @Expose()
  description: string;

  @Expose()
  image: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
