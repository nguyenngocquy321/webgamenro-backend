import { Test, TestingModule } from '@nestjs/testing';
import { WebhookSepayService } from './webhook-sepay.service';

describe('WebhookSepayService', () => {
  let service: WebhookSepayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookSepayService],
    }).compile();

    service = module.get<WebhookSepayService>(WebhookSepayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
