import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import SanPham from './SanPham.entity';

@Entity('HinhAnh')
export default class HinhAnh {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => SanPham, sanPham => sanPham.hinhAnhs, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'MaSanPham' })
    sanPham: SanPham;
}
