import {
    Column,
    CreateDateColumn,
    Entity, Index, JoinTable, ManyToMany,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Accesses} from "./accesses.entity";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    title: string

    @Column()
    description: string

    @ManyToMany(() => Accesses, accesses => accesses.id)
    @JoinTable({name: "roles_accesses"})
    accesses: Accesses[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}