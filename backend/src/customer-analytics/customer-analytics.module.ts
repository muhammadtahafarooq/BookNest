import { Module } from '@nestjs/common';
import { CustomerAnalyticsService } from './customer-analytics.service';
import { CustomerAnalyticsController } from './customer-analytics.controller';

@Module({
  providers: [CustomerAnalyticsService],
  controllers: [CustomerAnalyticsController],
  exports: [CustomerAnalyticsService],
})
export class CustomerAnalyticsModule {}
