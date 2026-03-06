import { Test, TestingModule } from '@nestjs/testing';
import { WebhookSepayController } from './webhook-sepay.controller';

describe('WebhookSepayController', () => {
  let controller: WebhookSepayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookSepayController],
    }).compile();

    controller = module.get<WebhookSepayController>(WebhookSepayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
