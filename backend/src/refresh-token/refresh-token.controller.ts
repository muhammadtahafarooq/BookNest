import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { UpdateRefreshTokenDto } from './dto/update-refresh-token.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('refresh-tokens')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Post()
  create(@Body() dto: CreateRefreshTokenDto) {
    return this.refreshTokenService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.refreshTokenService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refreshTokenService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRefreshTokenDto) {
    return this.refreshTokenService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refreshTokenService.remove(id);
  }
}
