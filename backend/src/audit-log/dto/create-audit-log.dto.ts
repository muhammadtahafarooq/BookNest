import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuditLogDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  action: string;

  @IsNotEmpty()
  @IsString()
  entity: string;

  @IsOptional()
  @IsString()
  entityId?: string;

  @IsOptional()
  oldData?: any;

  @IsOptional()
  newData?: any;
}
