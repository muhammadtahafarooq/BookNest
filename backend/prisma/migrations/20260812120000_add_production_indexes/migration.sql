-- Add missing foreign-key and hot-path indexes for production workloads
CREATE INDEX "Order_addressId_idx" ON "Order"("addressId");
CREATE INDEX "Order_couponId_idx" ON "Order"("couponId");
CREATE INDEX "Order_shippingMethodId_idx" ON "Order"("shippingMethodId");
CREATE INDEX "Order_userId_createdAt_idx" ON "Order"("userId", "createdAt");
CREATE INDEX "BlogPost_authorId_idx" ON "BlogPost"("authorId");
CREATE INDEX "Review_status_idx" ON "Review"("status");
CREATE INDEX "ContactMessage_status_createdAt_idx" ON "ContactMessage"("status", "createdAt");