import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToOne,
    OneToMany,
} from 'typeorm';

import DanhMucSanPham from './DanhMucSanPham.entity';
import ChiTietSanPham from './ChiTietSanPham.entity';
import HinhAnh from './HinhAnh.entity';

@Entity('SanPham')
export default class SanPham {
    @PrimaryGeneratedColumn()
    MaSanPham: number;

    @Column()
    HanhTinh: string;

    @Column()
    Server: number;

    @Column()
    AnhBia: string;

    @Column()
    Loai: string;
    @Column({ default: 1 })
    TrangThai: number;
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0,
    })
    GiaCard: number;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0,
    })
    GiaATM: number;

    // 🔥 ManyToOne DanhMuc
    @ManyToOne(() => DanhMucSanPham, danhMuc => danhMuc.sanPhams)
    @JoinColumn({ name: 'MaDanhMuc' })
    danhMuc: DanhMucSanPham;

    // 🔥 OneToOne ChiTiet
    @OneToOne(() => ChiTietSanPham, chiTiet => chiTiet.sanPham, {
        cascade: true,
    })
    chiTiet: ChiTietSanPham;

    // 🔥 OneToMany HinhAnh
    @OneToMany(() => HinhAnh, hinhAnh => hinhAnh.sanPham, {
        cascade: true,
    })
    hinhAnhs: HinhAnh[];
}
