import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import SanPham from './SanPham.entity';

@Entity('DanhMucSanPham')
export default class DanhMucSanPham {
    @PrimaryGeneratedColumn()
    MaDanhMuc: number;

    @Column()
    TieuDe: string;

    @Column()
    AnhBia: string;
    @Column({ default: 1 })
    TrangThai: number;
    @Column('text')
    MoTa: string;
    @Column({ type: 'int', default: 0 })
    SoLuong: number;
    @OneToMany(() => SanPham, sanPham => sanPham.danhMuc)
    sanPhams: SanPham[];
}
