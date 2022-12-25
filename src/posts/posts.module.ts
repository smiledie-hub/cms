import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Posts} from "./entities/posts.entity";
import {PostsService} from "./posts.service";
import {PostsMeta} from "./entities/posts-meta.entity";
import {PostsTypes} from "./entities/posts-types.entity";
import {PostsStatuses} from "./entities/posts-statuses.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Posts, PostsMeta, PostsTypes, PostsStatuses])],
    controllers: [],
    providers: [PostsService],
    exports: [PostsService]
})
export class PostsModule {
}
