import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { PaymentSettingService } from './payment-setting.service';
import { CreatePaymentSettingDto } from './dto/create-payment-setting.dto';
import { UpdatePaymentSettingDto } from './dto/update-payment-setting.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('payment-settings')
export class PaymentSettingController {
  constructor(private readonly paymentSettingService: PaymentSettingService) {}

  @Post()
  create(@Body() dto: CreatePaymentSettingDto) {
    return this.paymentSettingService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.paymentSettingService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentSettingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePaymentSettingDto) {
    return this.paymentSettingService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentSettingService.remove(id);
  }
}
