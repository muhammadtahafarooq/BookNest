import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('audit-logs')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  create(@Body() dto: CreateAuditLogDto) {
    return this.auditLogService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.auditLogService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditLogService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAuditLogDto) {
    return this.auditLogService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditLogService.remove(id);
  }
}
