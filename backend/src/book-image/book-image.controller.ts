import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { BookImageService } from './book-image.service';
import { CreateBookImageDto } from './dto/create-book-image.dto';
import { UpdateBookImageDto } from './dto/update-book-image.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('book-images')
export class BookImageController {
  constructor(private readonly bookImageService: BookImageService) {}

  @Post()
  create(@Body() dto: CreateBookImageDto) {
    return this.bookImageService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.bookImageService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookImageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBookImageDto) {
    return this.bookImageService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookImageService.remove(id);
  }
}
