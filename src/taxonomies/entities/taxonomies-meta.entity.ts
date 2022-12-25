import {
    Column,
    CreateDateColumn,
    Entity, Index, ManyToOne,
    PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Taxonomies} from "./taxonomies.entity";

@Entity()
export class TaxonomiesMeta {
    @PrimaryGeneratedColumn()
    @Index()
    id: number

    @Column({unique: true})
    key: string

    @Column()
    value: string

    @ManyToOne(() => Taxonomies, (taxonomy) => taxonomy.meta)
    taxonomy: Taxonomies

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}