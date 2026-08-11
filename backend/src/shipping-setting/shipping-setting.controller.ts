import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ShippingSettingService } from './shipping-setting.service';
import { CreateShippingSettingDto } from './dto/create-shipping-setting.dto';
import { UpdateShippingSettingDto } from './dto/update-shipping-setting.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('shipping-settings')
export class ShippingSettingController {
  constructor(private readonly shippingSettingService: ShippingSettingService) {}

  @Post()
  create(@Body() dto: CreateShippingSettingDto) {
    return this.shippingSettingService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.shippingSettingService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingSettingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateShippingSettingDto) {
    return this.shippingSettingService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingSettingService.remove(id);
  }
}
