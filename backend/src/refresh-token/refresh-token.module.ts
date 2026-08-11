import { Module } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshTokenController } from './refresh-token.controller';

@Module({
  providers: [RefreshTokenService],
  controllers: [RefreshTokenController],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule {}
