import {
    Column,
    CreateDateColumn,
    Entity, Index,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';

@Entity()
export class PostsTypes {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    key: string

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}