import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CustomerAnalyticsService } from './customer-analytics.service';
import { CreateCustomerAnalyticsDto } from './dto/create-customer-analytics.dto';
import { UpdateCustomerAnalyticsDto } from './dto/update-customer-analytics.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('customer-analyticses')
export class CustomerAnalyticsController {
  constructor(private readonly customerAnalyticsService: CustomerAnalyticsService) {}

  @Post()
  create(@Body() dto: CreateCustomerAnalyticsDto) {
    return this.customerAnalyticsService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.customerAnalyticsService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAnalyticsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCustomerAnalyticsDto) {
    return this.customerAnalyticsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAnalyticsService.remove(id);
  }
}
