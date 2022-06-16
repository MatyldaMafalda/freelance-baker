import { forwardRef, Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "modules/auth/auth.service";
import { JwtRefreshTokenStrategy } from "modules/auth/strategies/jwt-refresh.strategy";
import { JwtStrategy } from "modules/auth/strategies/jwt.strategy";
import { LocalStrategy } from "modules/auth/strategies/local.strategy";
import { RefreshToken } from "modules/auth/entities/refresh-token.entity";
import { UserModule } from "modules/user/user.module";
import { AuthController } from "modules/auth/auth.controller";

@Global()
@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule,
        ConfigModule,
        JwtModule.register({}),
        TypeOrmModule.forFeature([RefreshToken]),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy, JwtRefreshTokenStrategy],
    exports: [AuthService],
})
export class AuthModule {}
