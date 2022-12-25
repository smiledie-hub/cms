import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "./entities/users.entity";
import {UsersMeta} from "./entities/users-meta.entity";
import {Roles} from "./entities/roles.entity";
import {Accesses} from "./entities/accesses.entity";
import {UsersController} from "./users.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Users, UsersMeta, Roles, Accesses])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}
