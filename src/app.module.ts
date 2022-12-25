import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import {UsersModule} from "./users/users.module";
import {PostsModule} from "./posts/posts.module";
import {TaxonomiesModule} from "./taxonomies/taxonomies.module";
import {RecordsModule} from "./records/records.module";
import {LanguagesModule} from "./languages/languages.module";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            namingStrategy: new SnakeNamingStrategy(),
            synchronize: true,
            autoLoadEntities: true,
            migrationsRun: true
        }),
        UsersModule,
        PostsModule,
        TaxonomiesModule,
        RecordsModule,
        LanguagesModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
