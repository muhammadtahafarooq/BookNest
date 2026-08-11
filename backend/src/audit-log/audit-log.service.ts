import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';

@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAuditLogDto) {
    return this.prisma.auditLog.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.auditLog.findMany({ skip, take }),
      this.prisma.auditLog.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.auditLog.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('AuditLog not found');
    return record;
  }

  async update(id: string, data: UpdateAuditLogDto) {
    await this.findOne(id);
    return this.prisma.auditLog.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.auditLog.delete({ where: { id } });
    return { message: 'AuditLog deleted successfully' };
  }
}
