import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Records} from "./entities/records.entity";
import {RecordsService} from "./records.service";

@Module({
    imports: [TypeOrmModule.forFeature([Records])],
    controllers: [],
    providers: [RecordsService],
    exports: [RecordsService]
})
export class RecordsModule {
}
