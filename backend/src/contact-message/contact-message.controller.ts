import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ContactMessageService } from './contact-message.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { UpdateContactMessageDto } from './dto/update-contact-message.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('contact-messages')
export class ContactMessageController {
  constructor(private readonly contactMessageService: ContactMessageService) {}

  @Post()
  create(@Body() dto: CreateContactMessageDto) {
    return this.contactMessageService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.contactMessageService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactMessageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateContactMessageDto) {
    return this.contactMessageService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactMessageService.remove(id);
  }
}
