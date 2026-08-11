import { Exclude, Expose } from 'class-transformer';
import { Role } from '@prisma/client';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Expose()
  phone: string;

  @Expose()
  role: Role;

  @Expose()
  emailVerified: boolean;

  @Expose()
  isActive: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
