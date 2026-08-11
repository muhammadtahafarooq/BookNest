import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() dto: CreateCartDto) {
    return this.cartService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.cartService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCartDto) {
    return this.cartService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
