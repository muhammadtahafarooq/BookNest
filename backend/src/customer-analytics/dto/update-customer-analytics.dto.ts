import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAnalyticsDto } from './create-customer-analytics.dto';

export class UpdateCustomerAnalyticsDto extends PartialType(CreateCustomerAnalyticsDto) {}
