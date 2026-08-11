import { Module } from '@nestjs/common';
import { ContactMessageService } from './contact-message.service';
import { ContactMessageController } from './contact-message.controller';

@Module({
  providers: [ContactMessageService],
  controllers: [ContactMessageController],
  exports: [ContactMessageService],
})
export class ContactMessageModule {}
