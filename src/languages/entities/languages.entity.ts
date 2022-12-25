import {
    Column,
    CreateDateColumn,
    Entity, Index, OneToMany,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Records} from "../../records/entities/records.entity";

@Entity()
export class Languages {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true, length: 2})
    code: string

    @Column()
    title: string

    @OneToMany(() => Records, (record) => record.language)
    records: Records[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}