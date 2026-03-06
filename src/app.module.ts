import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WebhookSepayModule } from './modules/webhook-sepay/webhook-sepay.module';
import SanPham from './modules/products/entities/SanPham.entity';
import ChiTietSanPham from './modules/products/entities/ChiTietSanPham.entity';
import HinhAnh from './modules/products/entities/HinhAnh.entity';
import DanhMucSanPham from './modules/products/entities/DanhMucSanPham.entity';
@Module({
    imports: [
        ProductsModule,
        WebhookSepayModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [DanhMucSanPham, SanPham, ChiTietSanPham, HinhAnh],
            synchronize: true, // dev only
        }),
        WebhookSepayModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
