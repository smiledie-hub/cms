import {
    Column,
    CreateDateColumn,
    Entity, Index,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';

@Entity()
export class Accesses {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}