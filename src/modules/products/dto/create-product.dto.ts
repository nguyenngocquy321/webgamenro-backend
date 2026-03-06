import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty({ message: 'Không được để trống' })
    HanhTinh: string;

    @IsNumber()
    @IsNotEmpty({ message: 'Không được để trống' })
    Server: number;

    @IsString()
    @IsNotEmpty({ message: 'Không được để trống' })
    AnhBia: string;

    @IsString()
    @IsNotEmpty({ message: 'Không được để trống' })
    Loai: string;

    @IsNumber({}, { message: 'Giá tiền phải là số' })
    @IsNotEmpty({ message: 'Không được để trống' })
    GiaCard: number;

    @IsNumber({}, { message: 'Giá tiền phải là số' })
    @IsNotEmpty({ message: 'Không được để trống' })
    GiaATM: number;

    @IsNumber({}, { message: 'Mã danh mục phải là số' })
    @IsNotEmpty({ message: 'Không được để trống' })
    MaDanhMuc: number;
}
