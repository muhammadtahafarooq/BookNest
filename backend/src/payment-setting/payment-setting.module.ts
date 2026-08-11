import { Module } from '@nestjs/common';
import { PaymentSettingService } from './payment-setting.service';
import { PaymentSettingController } from './payment-setting.controller';

@Module({
  providers: [PaymentSettingService],
  controllers: [PaymentSettingController],
  exports: [PaymentSettingService],
})
export class PaymentSettingModule {}
