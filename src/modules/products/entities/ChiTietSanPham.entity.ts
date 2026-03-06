import { Column, Entity, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import SanPham from './SanPham.entity';

@Entity('ChiTietSanPham')
export default class ChiTietSanPham {
    // 🔥 dùng chung khóa chính với SanPham
    @PrimaryColumn()
    sanPhamId: number;

    @OneToOne(() => SanPham, sanPham => sanPham.chiTiet, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'sanPhamId' })
    sanPham: SanPham;

    @Column('text')
    MoTa: string;
}
