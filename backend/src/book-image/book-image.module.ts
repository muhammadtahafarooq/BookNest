import { Module } from '@nestjs/common';
import { BookImageService } from './book-image.service';
import { BookImageController } from './book-image.controller';

@Module({
  providers: [BookImageService],
  controllers: [BookImageController],
  exports: [BookImageService],
})
export class BookImageModule {}
