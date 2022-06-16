import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { AuthUser } from "modules/auth/auth-user.class";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "modules/user/user.service";

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, "jwt-refresh-token") {
    constructor(
        private readonly configService: ConfigService,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get("JWT_REFRESH_TOKEN_SECRET"),
            ignoreExpiration: false,
            passReqToCallback: true,
        });
    }

    async validate(request: Request): Promise<AuthUser> {
        const refreshToken = request.header("Authorization").replace("Bearer ", "");
        const user = await this.userService.getUserIfRefreshTokenMatches(refreshToken);
        return new AuthUser(user.id, user.email, user.role);
    }
}
