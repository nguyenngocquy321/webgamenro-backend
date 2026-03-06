import {
    Body,
    Controller,
    Post,
    UnauthorizedException,
    Headers,
} from '@nestjs/common';

@Controller('api/webhook-sepay')
export class WebhookSepayController {
    @Post()
    getGiaoDichWebhook(@Body() body: any) {
        return {
            success: true,
            data: body,
        };
    }
}
