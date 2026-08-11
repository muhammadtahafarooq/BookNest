import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { FAQService } from './faq.service';
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFAQDto } from './dto/update-faq.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('faqs')
export class FAQController {
  constructor(private readonly fAQService: FAQService) {}

  @Post()
  create(@Body() dto: CreateFAQDto) {
    return this.fAQService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.fAQService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fAQService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFAQDto) {
    return this.fAQService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fAQService.remove(id);
  }
}
