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
import { CreateUserCustomerDto } from "modules/user/dto/create-user-customer.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { User } from "modules/user/user.entity";
import { SkipAuth } from "modules/auth/decorators";
import { UserDto } from "modules/user/dto/user.dto";

@ApiTags("User")
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(":id")
    @ApiBearerAuth()
    async get(@Param("id") id: number): Promise<UserDto> {
        const user = await this.userService.findOne({ id });
        return new UserDto(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SkipAuth()
    @Post()
    @ApiBearerAuth()
    async create(@Body() newUser: User): Promise<UserDto> {
        const user = await this.userService.create(newUser);
        return new UserDto(user);
    }

    @Delete(":id")
    @ApiBearerAuth()
    async delete(@Param("id") id: number): Promise<void> {
        await this.userService.deleteUser(id);
    }
}
