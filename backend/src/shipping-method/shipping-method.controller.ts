import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ShippingMethodService } from './shipping-method.service';
import { CreateShippingMethodDto } from './dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping-method.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('shipping-methods')
export class ShippingMethodController {
  constructor(private readonly shippingMethodService: ShippingMethodService) {}

  @Post()
  create(@Body() dto: CreateShippingMethodDto) {
    return this.shippingMethodService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.shippingMethodService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingMethodService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateShippingMethodDto) {
    return this.shippingMethodService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingMethodService.remove(id);
  }
}
