import { PartialType } from '@nestjs/mapped-types';
import { CreateDanhMucSanPhamDto } from './create-DanhMucSanPham.dto';

export class UpdateDanhMucDto extends PartialType(CreateDanhMucSanPhamDto) {
    TieuDe: string;
    AnhBia: string;
    MoTa: string;
    SoLuong: number;
}
