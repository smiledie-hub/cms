import {
    Column,
    CreateDateColumn,
    Entity, Index, JoinColumn, OneToMany, OneToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {TaxonomiesMeta} from "./taxonomies-meta.entity";

@Entity()
export class Taxonomies {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    slug: string

    @Column()
    title: string

    @Column()
    description: string

    @OneToOne(() => Taxonomies)
    @JoinColumn()
    parent: Taxonomies

    @OneToMany(() => TaxonomiesMeta, (meta) => meta.taxonomy)
    meta: TaxonomiesMeta

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}