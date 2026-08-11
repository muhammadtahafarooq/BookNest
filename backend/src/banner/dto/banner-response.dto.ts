import { Exclude, Expose } from 'class-transformer';

export class BannerResponseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  subtitle: string;

  @Expose()
  imageUrl: string;

  @Expose()
  buttonText: string;

  @Expose()
  buttonLink: string;

  @Expose()
  active: boolean;

  @Expose()
  sortOrder: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
