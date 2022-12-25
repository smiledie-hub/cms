import {
    Column,
    CreateDateColumn,
    Entity, Index, ManyToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Users} from "./users.entity";

@Entity()
export class UsersMeta {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    key: string

    @Column()
    value: string

    @ManyToOne(() => Users, (user) => user.meta)
    user: Users

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}