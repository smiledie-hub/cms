import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {AccessTokenStrategy} from "./strategies/access-token.strategy";
import {RefreshTokenStrategy} from "./strategies/refresh-token.strategy";
import {UsersModule} from "../users/users.module";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({}),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        AccessTokenStrategy,
        RefreshTokenStrategy
    ],
    exports: [AuthService]
})
export class AuthModule {
}
