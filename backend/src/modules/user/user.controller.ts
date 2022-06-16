import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { UserService } from "modules/user/user.service";
import { CreateUserDto } from "modules/user/dto/create-user.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserDto } from "modules/user/dto/user.dto";
import { SkipAuth } from "modules/auth/decorators";

@ApiTags("User")
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(":id")
    @ApiBearerAuth()
    async get(@Param("id") id: string): Promise<UserDto> {
        const user = await this.userService.findOne({ id });
        return new UserDto(user);
    }

    @SkipAuth()
    @Post()
    @ApiBearerAuth()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        const newUser = await this.userService.create(createUserDto);
        return new UserDto(newUser);
    }

    @Delete(":id")
    @ApiBearerAuth()
    async delete(@Param("id") id: string): Promise<void> {
        await this.userService.deleteUser(id);
    }
}
