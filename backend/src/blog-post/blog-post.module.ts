import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';

@Module({
  providers: [BlogPostService],
  controllers: [BlogPostController],
  exports: [BlogPostService],
})
export class BlogPostModule {}
