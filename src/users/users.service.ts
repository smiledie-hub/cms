import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>,) {
    }

    async create(createUserDto: CreateUserDto): Promise<Users> {
        const createdUser = await this.usersRepository.save(createUserDto);
        return createdUser
    }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async findById(id: number): Promise<Users> {
        return await this.usersRepository.findOneBy({id: id})
    }

    async findByUsername(username: string): Promise<Users> {
        return await this.usersRepository.findOneBy([{
            email: username,
        }])
    }

    async update(
        id: number,
        updateUserDto: UpdateUserDto,
    ): Promise<UpdateResult> {
        return await this.usersRepository.update({id: id}, updateUserDto)
    }

    async remove(id: number): Promise<DeleteResult> {
        return await this.usersRepository.delete({id: id})
    }
}
