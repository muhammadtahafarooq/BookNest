import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('blog-posts')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Post()
  create(@Body() dto: CreateBlogPostDto) {
    return this.blogPostService.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.blogPostService.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogPostService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBlogPostDto) {
    return this.blogPostService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogPostService.remove(id);
  }
}
