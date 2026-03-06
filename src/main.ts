import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
    origin: [
      "http://localhost:5173",
      "https://webgamenro-backend.onrender.com"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // loại bỏ field dư
            forbidNonWhitelisted: true, // báo lỗi nếu gửi field lạ
            transform: true, // tự động convert kiểu
        })
    );
    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
