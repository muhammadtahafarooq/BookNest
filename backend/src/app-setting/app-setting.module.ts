import { Module } from '@nestjs/common';
import { AppSettingService } from './app-setting.service';
import { AppSettingController } from './app-setting.controller';

@Module({
  providers: [AppSettingService],
  controllers: [AppSettingController],
  exports: [AppSettingService],
})
export class AppSettingModule {}
