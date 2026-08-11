import { Exclude, Expose } from 'class-transformer';

export class PublisherResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  website: string;

  @Expose()
  description: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
