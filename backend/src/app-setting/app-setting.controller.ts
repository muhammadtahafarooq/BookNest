import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { AppSettingService } from './app-setting.service';
import { CreateAppSettingDto } from './dto/create-app-setting.dto';
import { UpdateAppSettingDto } from './dto/update-app-setting.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('app-settings')
export class AppSettingController {
  constructor(private readonly appSettingService: AppSettingService) {}

  @Post()
  create(@Body() dto: CreateAppSettingDto) {
    return this.appSettingService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.appSettingService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appSettingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAppSettingDto) {
    return this.appSettingService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appSettingService.remove(id);
  }
}
