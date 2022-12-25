import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Languages} from "./entities/languages.entity";

@Injectable()
export class LanguagesService {
    constructor(@InjectRepository(Languages) private languagesRepository: Repository<Languages>,) {
    }


}
