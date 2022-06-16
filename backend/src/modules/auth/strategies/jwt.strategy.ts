import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { AuthUser } from "modules/auth/auth-user.class";
import { TokenPayload } from "modules/auth/token-payload.interface";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("JWT_ACCESS_TOKEN_SECRET"),
        });
    }

    async validate(payload: TokenPayload) {
        return new AuthUser(payload.userId, payload.email, payload.role);
    }
}
