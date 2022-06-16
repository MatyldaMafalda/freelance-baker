import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { AuthService } from "modules/auth/auth.service";
import { AuthUser } from "modules/auth";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: "email" });
    }

    async validate(email: string, password: string): Promise<AuthUser> {
        return await this.authService.validateUser(email, password);
    }
}
