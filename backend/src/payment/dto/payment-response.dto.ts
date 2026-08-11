import { Exclude, Expose } from 'class-transformer';
import { PaymentMethod, PaymentStatus } from '@prisma/client';

export class PaymentResponseDto {
  @Expose()
  id: string;

  @Expose()
  orderId: string;

  @Expose()
  method: PaymentMethod;

  @Expose()
  status: PaymentStatus;

  @Expose()
  transactionId: string;

  @Expose()
  amount: number;

  @Expose()
  paymentResponse: any;

  @Expose()
  paidAt: Date;

  @Expose()
  createdAt: Date;
}
