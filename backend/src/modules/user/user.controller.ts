import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    ClassSerializerInterceptor,
    UseInterceptors,
} from "@nestjs/common";
import { UserService } from "modules/user/user.service";
import { CreateUserDto } from "modules/user/dto/create-user.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { User } from "./user.entity";
import { SkipAuth } from "../auth/decorators";

@ApiTags("User")
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(":id")
    @ApiBearerAuth()
    @SkipAuth()
    async get(@Param("id") id: number): Promise<User> {
        const user = await this.userService.findOne({ id });
        return new User(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SkipAuth()
    @Post()
    @ApiBearerAuth()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userService.create(createUserDto);
        return new User(user);
    }

    @Delete(":id")
    @ApiBearerAuth()
    async delete(@Param("id") id: number): Promise<void> {
        await this.userService.deleteUser(id);
    }
}
