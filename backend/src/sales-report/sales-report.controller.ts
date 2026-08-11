import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { SalesReportService } from './sales-report.service';
import { CreateSalesReportDto } from './dto/create-sales-report.dto';
import { UpdateSalesReportDto } from './dto/update-sales-report.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('sales-reports')
export class SalesReportController {
  constructor(private readonly salesReportService: SalesReportService) {}

  @Post()
  create(@Body() dto: CreateSalesReportDto) {
    return this.salesReportService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.salesReportService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesReportService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSalesReportDto) {
    return this.salesReportService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesReportService.remove(id);
  }
}
