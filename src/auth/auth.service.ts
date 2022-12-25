import {BadRequestException, ForbiddenException, Injectable} from '@nestjs/common';
import * as argon2 from 'argon2';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {AuthDto} from './dto/auth.dto';
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {
    }

    async signUp(createUserDto: CreateUserDto): Promise<any> {
        const userExists = await this.usersService.findByUsername(
            createUserDto.email,
        )

        if (userExists) {
            throw new BadRequestException('User already exists')
        }

        const hash = await this.hashData(createUserDto.password)
        const newUser = await this.usersService.create({
            ...createUserDto,
            password: hash,
        })

        const tokens = await this.getTokens(newUser.id, newUser.email)
        await this.updateRefreshToken(newUser.id, tokens.refreshToken)

        return tokens
    }

    async signIn(data: AuthDto) {
        const user = await this.usersService.findByUsername(data.email)
        if (!user)
            throw new BadRequestException('User does not exist')

        const passwordMatches = await argon2.verify(user.password, data.password)
        if (!passwordMatches)
            throw new BadRequestException('Password is incorrect')

        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRefreshToken(user.id, tokens.refreshToken)

        return tokens
    }

    async logout(userId: number) {
        return this.usersService.update(userId, {refreshToken: null})
    }

    hashData(data: string) {
        return argon2.hash(data)
    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.update(userId, {
            refreshToken: hashedRefreshToken,
        })
    }

    async getTokens(userId: number, username: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                },
                {
                    secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                    expiresIn: '15m',
                },
            ),

            this.jwtService.signAsync(
                {
                    sub: userId,
                    username,
                },
                {
                    secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                    expiresIn: '30d',
                },
            ),
        ])

        return {
            accessToken,
            refreshToken,
        }
    }

    async refreshTokens(userId: number, refreshToken: string) {
        const user = await this.usersService.findById(userId)

        if (!user || !user.refreshToken)
            throw new ForbiddenException('Access Denied')

        const refreshTokenMatches = await argon2.verify(
            user.refreshToken,
            refreshToken,
        )

        if (!refreshTokenMatches)
            throw new ForbiddenException('Access Denied')

        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRefreshToken(user.id, tokens.refreshToken)

        return tokens
    }
}