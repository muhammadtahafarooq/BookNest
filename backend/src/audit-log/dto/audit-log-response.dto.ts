import { Exclude, Expose } from 'class-transformer';

export class AuditLogResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  action: string;

  @Expose()
  entity: string;

  @Expose()
  entityId: string;

  @Expose()
  oldData: any;

  @Expose()
  newData: any;

  @Expose()
  createdAt: Date;
}
