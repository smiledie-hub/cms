import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Posts} from "./entities/posts.entity";

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>,) {
    }


}
