import { Module } from '@nestjs/common';
import { ShippingSettingService } from './shipping-setting.service';
import { ShippingSettingController } from './shipping-setting.controller';

@Module({
  providers: [ShippingSettingService],
  controllers: [ShippingSettingController],
  exports: [ShippingSettingService],
})
export class ShippingSettingModule {}
