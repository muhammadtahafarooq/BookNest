import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('wishlists')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() dto: CreateWishlistDto) {
    return this.wishlistService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.wishlistService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWishlistDto) {
    return this.wishlistService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
