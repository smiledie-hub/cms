import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Languages} from "./entities/languages.entity";
import {LanguagesService} from "./languages.service";

@Module({
    imports: [TypeOrmModule.forFeature([Languages])],
    controllers: [],
    providers: [LanguagesService],
    exports: [LanguagesService]
})
export class LanguagesModule {
}
