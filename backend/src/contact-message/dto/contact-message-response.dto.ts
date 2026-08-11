import { Exclude, Expose } from 'class-transformer';
import { ContactStatus } from '@prisma/client';

export class ContactMessageResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  subject: string;

  @Expose()
  message: string;

  @Expose()
  status: ContactStatus;

  @Expose()
  createdAt: Date;
}
