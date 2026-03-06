import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import DanhMucSanPham from './entities/DanhMucSanPham.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import SanPham from './entities/SanPham.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DanhMucSanPham, SanPham])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
