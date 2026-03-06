import { Module } from '@nestjs/common';
import { WebhookSepayController } from './webhook-sepay.controller';
import { WebhookSepayService } from './webhook-sepay.service';

@Module({
  controllers: [WebhookSepayController],
  providers: [WebhookSepayService]
})
export class WebhookSepayModule {}
