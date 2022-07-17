import { forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";

import { UserService } from "modules/user/user.service";
import { TokenPayload } from "modules/auth/token-payload.interface";
import { AuthUser } from "modules/auth/auth-user.class";
import { RefreshToken } from "modules/auth/entities/refresh-token.entity";

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @InjectRepository(RefreshToken)
        private refreshTokenRepository: Repository<RefreshToken>
    ) {}

    async validateUser(email: string, pass: string): Promise<AuthUser> {
        const user = await this.userService.findOne({ email });

        if (user) {
            const passwordMatch = await bcrypt.compare(pass, user.password);
            if (passwordMatch) {
                return new AuthUser(user.id, user.email, user.role);
            }
        }

        throw new UnauthorizedException();
    }

    async login(user: AuthUser) {
        return {
            ...(await this.getJwtAccessToken(user)),
            ...(await this.getJwtRefreshToken(user)),
        };
    }

    public async getJwtAccessToken(user: AuthUser) {
        const payload: TokenPayload = { userId: user.userId, email: user.email, role: user.role };

        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get("JWT_ACCESS_TOKEN_SECRET"),
            expiresIn: `${this.configService.get("JWT_ACCESS_TOKEN_EXPIRATION_TIME")}s`,
        });
        return { accessToken };
    }

    private async getJwtRefreshToken(user: AuthUser) {
        const crypto = await import("crypto");
        const cryptoRandomToken = crypto.randomBytes(64).toString("hex");
        const refreshToken = await this.jwtService.signAsync(
            { key: cryptoRandomToken }, //crypto-random string
            {
                secret: this.configService.get("JWT_REFRESH_TOKEN_SECRET"),
                expiresIn: `${this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME")}s`, //change expiration
            }
        );
        await this.hashAndStoreJwtRefreshToken(user, refreshToken);
        return { refreshToken };
    }

    async hashAndStoreJwtRefreshToken(authUser: AuthUser, refreshToken: string) {
        const persistRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.refreshTokenRepository.save({
            token: persistRefreshToken,
            user: { id: authUser.userId },
        });
    }

    async deleteRefreshTokens(userId: number) {
        await this.refreshTokenRepository.delete({ user: { id: userId } });
    }

    async findRefreshTokens() {
        return await this.refreshTokenRepository.find();
    }
}
