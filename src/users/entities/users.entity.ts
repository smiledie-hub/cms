import {
    Column,
    CreateDateColumn,
    Entity, Index, JoinColumn, OneToMany, OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {UsersMeta} from "./users-meta.entity";
import {Roles} from "./roles.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    email: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    refreshToken: string

    @OneToMany(() => UsersMeta, (meta) => meta.user)
    meta: UsersMeta

    @OneToOne(() => Roles)
    @JoinColumn()
    role: Roles

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}