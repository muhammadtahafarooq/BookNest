import { Module } from '@nestjs/common';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { PublisherModule } from './publisher/publisher.module';
import { BookModule } from './book/book.module';
import { BookImageModule } from './book-image/book-image.module';
import { InventoryModule } from './inventory/inventory.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CouponModule } from './coupon/coupon.module';
import { ShippingMethodModule } from './shipping-method/shipping-method.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentModule } from './payment/payment.module';
import { ReviewModule } from './review/review.module';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BannerModule } from './banner/banner.module';
import { ContactMessageModule } from './contact-message/contact-message.module';
import { FAQModule } from './faq/faq.module';
import { NotificationModule } from './notification/notification.module';
import { AppSettingModule } from './app-setting/app-setting.module';
import { PaymentSettingModule } from './payment-setting/payment-setting.module';
import { ShippingSettingModule } from './shipping-setting/shipping-setting.module';
import { SalesReportModule } from './sales-report/sales-report.module';
import { CustomerAnalyticsModule } from './customer-analytics/customer-analytics.module';
import { AuditLogModule } from './audit-log/audit-log.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    PrismaModule,
    AuthModule,
    UserModule,
    AddressModule,
    RefreshTokenModule,
    CategoryModule,
    AuthorModule,
    PublisherModule,
    BookModule,
    BookImageModule,
    InventoryModule,
    WishlistModule,
    CartModule,
    CartItemModule,
    CouponModule,
    ShippingMethodModule,
    OrderModule,
    OrderItemModule,
    PaymentModule,
    ReviewModule,
    BlogPostModule,
    BannerModule,
    ContactMessageModule,
    FAQModule,
    NotificationModule,
    AppSettingModule,
    PaymentSettingModule,
    ShippingSettingModule,
    SalesReportModule,
    CustomerAnalyticsModule,
    AuditLogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
