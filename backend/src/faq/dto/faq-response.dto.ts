import { Exclude, Expose } from 'class-transformer';

export class FAQResponseDto {
  @Expose()
  id: string;

  @Expose()
  question: string;

  @Expose()
  answer: string;

  @Expose()
  active: boolean;

  @Expose()
  sortOrder: number;

  @Expose()
  createdAt: Date;
}
