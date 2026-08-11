import { Module } from '@nestjs/common';
import { SalesReportService } from './sales-report.service';
import { SalesReportController } from './sales-report.controller';

@Module({
  providers: [SalesReportService],
  controllers: [SalesReportController],
  exports: [SalesReportService],
})
export class SalesReportModule {}
