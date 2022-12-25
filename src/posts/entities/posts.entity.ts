import {
    Column,
    CreateDateColumn,
    Entity, Index, JoinColumn, OneToMany, OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Records} from "../../records/entities/records.entity";
import {PostsMeta} from "./posts-meta.entity";
import {PostsTypes} from "./posts-types.entity";
import {PostsStatuses} from "./posts-statuses.entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    slug: string

    @Column()
    title: string

    @OneToOne(() => Posts)
    @JoinColumn()
    parent: Posts

    @OneToOne(() => PostsStatuses)
    @JoinColumn()
    status: PostsStatuses

    @OneToOne(() => PostsTypes)
    @JoinColumn()
    type: PostsTypes

    @OneToMany(() => Records, (record) => record.post)
    records: Records

    @OneToMany(() => PostsMeta, (meta) => meta.post)
    meta: PostsMeta

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}