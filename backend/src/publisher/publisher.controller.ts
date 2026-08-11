import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(@Body() dto: CreatePublisherDto) {
    return this.publisherService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.publisherService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publisherService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePublisherDto) {
    return this.publisherService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publisherService.remove(id);
  }
}
