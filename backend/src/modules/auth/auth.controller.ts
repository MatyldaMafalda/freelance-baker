import { Controller, Delete, forwardRef, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiBody } from "@nestjs/swagger";
import { AuthUser } from "modules/auth/auth-user.class";
import { AuthService } from "modules/auth/auth.service";
import { SkipAuth } from "modules/auth/decorators/skip-auth.decorator";
import { UserPrincipal } from "modules/auth/decorators/user-principal.decorator";
import { AccessTokenDto } from "modules/auth/dto/access-token.dto";
import { CredentialsDto } from "modules/auth/dto/credentials.dto";
import { TokensDto } from "modules/auth/dto/tokens.dto";
import { JwtRefreshGuard } from "modules/auth/guards/jwt-refresh.guard";
import { LocalAuthGuard } from "modules/auth/guards/local-auth.guard";
import { UserService } from "modules/user/user.service";

@ApiTags("Auth")
@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService
    ) {}

    @SkipAuth()
    @UseGuards(LocalAuthGuard)
    @ApiBody({ type: CredentialsDto })
    @Post("auth/login")
    async login(@UserPrincipal() user: AuthUser): Promise<TokensDto> {
        console.log(user);
        const tokens = await this.authService.login(user);
        await this.authService.hashAndStoreJwtRefreshToken(user, tokens.refreshToken);
        return new TokensDto(tokens.accessToken, tokens.refreshToken);
    }

    @SkipAuth()
    @UseGuards(JwtRefreshGuard)
    @Get("auth/refresh")
    async refresh(@UserPrincipal() user: AuthUser): Promise<AccessTokenDto> {
        const token = await this.authService.getJwtAccessToken(user);
        return new AccessTokenDto(token.accessToken);
    }

    @ApiBearerAuth()
    @Delete("auth/logout")
    async logout(@UserPrincipal() user: AuthUser): Promise<void> {
        await this.userService.deleteUserRefreshTokens(user.userId);
    }
}
