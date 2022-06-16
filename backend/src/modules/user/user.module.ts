import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "modules/user/user.service";
import { UserController } from "modules/user/user.controller";
import { User } from "modules/user/user.entity";
import { AuthModule } from "modules/auth";
import { Baker } from "modules/baker/baker.entity";
import { Cake } from "modules/cake/cake.entity";
import { BakerService } from "modules/baker/baker.service";

@Module({
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User, Baker, Cake])],
    controllers: [UserController],
    exports: [UserService],
    providers: [UserService, BakerService],
})
export class UserModule {}
