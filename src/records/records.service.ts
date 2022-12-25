import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Records} from "./entities/records.entity";

@Injectable()
export class RecordsService {
    constructor(@InjectRepository(Records) private recordsRepository: Repository<Records>,) {
    }


}
