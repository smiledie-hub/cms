import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TaxonomiesService} from "./taxonomies.service";
import {Taxonomies} from "./entities/taxonomies.entity";
import {TaxonomiesMeta} from "./entities/taxonomies-meta.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Taxonomies, TaxonomiesMeta])],
    controllers: [],
    providers: [TaxonomiesService],
    exports: [TaxonomiesService]
})
export class TaxonomiesModule {
}
