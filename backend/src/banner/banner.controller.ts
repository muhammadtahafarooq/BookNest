import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('banners')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  create(@Body() dto: CreateBannerDto) {
    return this.bannerService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.bannerService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBannerDto) {
    return this.bannerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerService.remove(id);
  }
}
