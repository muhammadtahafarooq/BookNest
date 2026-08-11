import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('order-items')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  create(@Body() dto: CreateOrderItemDto) {
    return this.orderItemService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.orderItemService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOrderItemDto) {
    return this.orderItemService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(id);
  }
}
