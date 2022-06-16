import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { configScheme } from "config/config-scheme";
import { databaseConfig } from "config/database.config";

import { UserModule } from "modules/user/user.module";

import { AuthModule, JwtAuthGuard, RolesGuard } from "modules/auth";
import { APP_GUARD } from "@nestjs/core";
import { CakeModule } from "modules/cake/cake.module";
import { BakerModule } from "modules/baker/baker.module";

const TypeORMModule = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => ({
        ...config.get("database"),
        autoLoadEntities: true,
    }),
    inject: [ConfigService],
});

const CustomConfigModule = ConfigModule.forRoot({
    load: [databaseConfig],
    envFilePath: process.env.NODE_ENV === "production" ? ".env" : [".env.development.local", ".env.development"],
    validationSchema: configScheme,
});

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeORMModule,
        CustomConfigModule,
        UserModule,
        AuthModule,
        CakeModule,
        BakerModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule {}
