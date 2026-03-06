import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    ParseIntPipe,
    DefaultValuePipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateDanhMucSanPhamDto } from './dto/create-DanhMucSanPham.dto';
import { UpdateDanhMucDto } from './dto/update-DanhMucSanPham.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get('DanhMucSanPham')
    findAllDanhMucSanPham() {
        return this.productsService.findAllDanhMucSanPham();
    }

    @Get('DanhMucSanPham/:MaDanhMuc')
    findOneDanhMucSanPham(@Param('MaDanhMuc') MaDanhMuc: number) {
        return this.productsService.findOneDanhMucSanPham(MaDanhMuc);
    }
    @Post('DanhMucSanPham')
    createDanhMucSanPham(@Body() createProductDto: CreateDanhMucSanPhamDto) {
        return this.productsService.createDanhMucSanPham(createProductDto);
    }
    @Patch('DanhMucSanPham/:MaDanhMuc')
    updateDanhMucSanPham(
        @Param('MaDanhMuc') MaDanhMuc: number,
        @Body() updateProductDto: UpdateDanhMucDto
    ) {
        return this.productsService.updateDanhMucSanPham(
            MaDanhMuc,
            updateProductDto
        );
    }
    @Get()
    findAllSanPham(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
    ) {
        return this.productsService.findAllSanPham(page, limit);
    }
    @Post()
    createSanPham(@Body() sanPhamDto: CreateProductDto) {
        return this.productsService.createSanPham(sanPhamDto);
    }

    @Patch(':MaSanPham')
    update(
        @Param('MaSanPham') MaSanPham: number,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productsService.updateSanPham(MaSanPham, updateProductDto);
    }

    @Delete(':MaSanPham')
    removeSanPham(@Param('MaSanPham') MaSanPham: number) {
        return this.productsService.removeSanPham(MaSanPham);
    }
    @Get('search')
    searchSanPham(@Query('type') type: string) {
        console.log(type);
        return this.productsService.locTheoGia(type);
    }
    @Get(':MaSanPham')
    findOneSanPham(@Param('MaSanPham') MaSanPham: number) {
        return this.productsService.findOneSanPham(MaSanPham);
    }
}
