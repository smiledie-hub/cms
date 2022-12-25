import {
    Column,
    CreateDateColumn,
    Entity, Index, ManyToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Languages} from "../../languages/entities/languages.entity";
import {Posts} from "../../posts/entities/posts.entity";

@Entity()
export class Records {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    key: string

    @Column()
    value: string

    @ManyToOne(() => Languages, (language) => language.records)
    language: Languages

    @ManyToOne(() => Posts, (post) => post.records)
    post: Posts

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}