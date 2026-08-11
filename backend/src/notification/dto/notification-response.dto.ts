import { Exclude, Expose } from 'class-transformer';
import { NotificationType } from '@prisma/client';

export class NotificationResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  title: string;

  @Expose()
  message: string;

  @Expose()
  type: NotificationType;

  @Expose()
  read: boolean;

  @Expose()
  createdAt: Date;
}
