import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import DanhMucSanPham from './entities/DanhMucSanPham.entity';
import { Between, LessThanOrEqual, Repository } from 'typeorm';
import { CreateDanhMucSanPhamDto } from './dto/create-DanhMucSanPham.dto';
import SanPham from './entities/SanPham.entity';
import { UpdateDanhMucDto } from './dto/update-DanhMucSanPham.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(DanhMucSanPham)
        private readonly danhMucSanPhamRepository: Repository<DanhMucSanPham>,
        @InjectRepository(SanPham)
        private sanPhamRepository: Repository<SanPham>
    ) {}

    async findAllDanhMucSanPham() {
        const danhMuc = await this.danhMucSanPhamRepository.find();
        if (danhMuc.length === 0) {
            throw new NotFoundException('Không có dữ liệu');
        }
        return danhMuc;
    }
    async findOneDanhMucSanPham(MaDanhMuc: number) {
        const danhMuc = await this.danhMucSanPhamRepository.findOneBy({
            MaDanhMuc,
        });
        if (!danhMuc) {
            throw new NotFoundException('Không có dữ liệu');
        }
        return danhMuc;
    }
    async createDanhMucSanPham(dto: CreateDanhMucSanPhamDto) {
        const product = this.danhMucSanPhamRepository.create(dto);

        const saved = await this.danhMucSanPhamRepository.save(product);

        return {
            message: `Tạo danh mục thành công Mã Danh Mục ${saved.MaDanhMuc}`,
        };
    }
    async updateDanhMucSanPham(
        MaDanhMuc: number,
        updateDanhMucSanPhamDto: UpdateDanhMucDto
    ) {
        const danhMucOld = await this.danhMucSanPhamRepository.findOneBy({
            MaDanhMuc,
        });
        if (!danhMucOld) {
            throw new NotFoundException('Không có dữ liệu');
        }
        Object.assign(danhMucOld, updateDanhMucSanPhamDto);
        return this.danhMucSanPhamRepository.save(danhMucOld);
    }
    async findAllSanPham(page: number, limit: number) {
        const [data, total] = await this.sanPhamRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        if (data.length === 0) throw new NotFoundException('Không có dữ liệu');
        return {
            SanPham: data,
            Paragination: {
                TongSanPham: total,
                page: page,
                SoLuongHienThi: limit,
                TongTrang: Math.ceil(total / limit),
            },
        };
    }
    async createSanPham(createProductDto: CreateProductDto) {
        // kiểm tra danh mục tồn tại
        const danhMuc = await this.danhMucSanPhamRepository.findOneBy({
            MaDanhMuc: createProductDto.MaDanhMuc,
        });

        if (!danhMuc) {
            throw new NotFoundException('Không tồn tại mã danh mục này');
        }

        // tạo entity
        const sanPham = this.sanPhamRepository.create({
            ...createProductDto,
            danhMuc: { MaDanhMuc: createProductDto.MaDanhMuc },
        });

        // lưu
        const saved = await this.sanPhamRepository.save(sanPham);

        return {
            message: `Tạo sản phẩm thành công. Mã sản phẩm: ${saved.MaSanPham}`,
        };
    }
    async findOneSanPham(MaSanPham: number) {
        const sanPham = await this.sanPhamRepository.findOneBy({ MaSanPham });
        if (!sanPham) throw new NotFoundException('Không có dữ liệu');
        return sanPham;
    }

    async updateSanPham(MaSanPham: number, updateProductDto: UpdateProductDto) {
        const result = await this.sanPhamRepository.update(
            { MaSanPham },
            {
                danhMuc: { MaDanhMuc: updateProductDto.MaDanhMuc },
            }
        );

        if (result.affected === 0) {
            throw new NotFoundException('Không tìm thấy sản phẩm');
        }

        return {
            message: 'Cập nhật sản phẩm thành công',
            data: result,
        };
    }

    async removeSanPham(MaSanPham: number) {
        const result = await this.sanPhamRepository.delete(MaSanPham);
        if (result.affected === 0)
            throw new NotFoundException('Không tìm thấy sản phẩm');

        return {
            message: `Xóa sản phẩm thành công Mã Sản Phẩm ${MaSanPham}`,
        };
    }

    async locTheoGia(type: string) {
        switch (type) {
            case '0-50000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: LessThanOrEqual(50000) },
                });

            case '50000-100000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(50000, 100000) },
                });

            case '100000-300000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(100000, 300000) },
                });

            case '300000-500000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(300000, 500000) },
                });

            case '500000-700000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(500000, 700000) },
                });

            case '700000-1000000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(700000, 1000000) },
                });

            case '1000000-2000000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(1000000, 2000000) },
                });

            case '2000000-5000000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(2000000, 5000000) },
                });

            case '5000000-10000000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(5000000, 10000000) },
                });

            case '10000000-100000000':
                return this.sanPhamRepository.find({
                    where: { GiaCard: Between(10000000, 100000000) },
                });

            default:
                return this.sanPhamRepository.find();
        }
    }
}
