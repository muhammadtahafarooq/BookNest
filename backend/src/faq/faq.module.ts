import { Module } from '@nestjs/common';
import { FAQService } from './faq.service';
import { FAQController } from './faq.controller';

@Module({
  providers: [FAQService],
  controllers: [FAQController],
  exports: [FAQService],
})
export class FAQModule {}
