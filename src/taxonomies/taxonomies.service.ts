import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Taxonomies} from "./entities/taxonomies.entity";

@Injectable()
export class TaxonomiesService {
    constructor(@InjectRepository(Taxonomies) private taxonomiesRepository: Repository<Taxonomies>,) {
    }


}
