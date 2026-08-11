import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingSettingDto } from './create-shipping-setting.dto';

export class UpdateShippingSettingDto extends PartialType(CreateShippingSettingDto) {}
