import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentSettingDto } from './create-payment-setting.dto';

export class UpdatePaymentSettingDto extends PartialType(CreatePaymentSettingDto) {}
