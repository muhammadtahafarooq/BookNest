import { Module } from '@nestjs/common';
import { ShippingMethodService } from './shipping-method.service';
import { ShippingMethodController } from './shipping-method.controller';

@Module({
  providers: [ShippingMethodService],
  controllers: [ShippingMethodController],
  exports: [ShippingMethodService],
})
export class ShippingMethodModule {}
