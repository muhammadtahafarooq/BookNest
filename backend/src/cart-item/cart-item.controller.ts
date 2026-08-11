import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('cart-items')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  create(@Body() dto: CreateCartItemDto) {
    return this.cartItemService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.cartItemService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCartItemDto) {
    return this.cartItemService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemService.remove(id);
  }
}
