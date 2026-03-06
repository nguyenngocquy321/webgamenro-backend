import {
    IsNotEmpty,
    IsString,
    MaxLength,
    IsOptional,
    IsNumber,
} from 'class-validator';

export class CreateDanhMucSanPhamDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    TieuDe: string;

    @IsString()
    @IsOptional()
    AnhBia?: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    MoTa?: string;
    @IsNumber()
    SoLuong: number;
}
