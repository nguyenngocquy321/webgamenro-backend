import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    TieuDe?: string | undefined;
    HanhTinh?: string | undefined;
    Server?: number | undefined;
    AnhBia?: string | undefined;
    Loai?: string | undefined;
    GiaATM?: number | undefined;
    GiaCard?: number | undefined;
    MaDanhMuc?: number | undefined;
}
