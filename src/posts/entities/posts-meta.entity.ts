import {
    Column,
    CreateDateColumn,
    Entity, Index, ManyToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Posts} from "./posts.entity";

@Entity()
export class PostsMeta {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    key: string

    @Column()
    value: string

    @ManyToOne(() => Posts, (post) => post.meta)
    post: Posts

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}