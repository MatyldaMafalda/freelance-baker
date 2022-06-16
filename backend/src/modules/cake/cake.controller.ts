import { Controller, Get, Post, Body, Patch, Delete, Param } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { SkipAuth } from "modules/auth/decorators";
import { CakeService } from "modules/cake/cake.service";
import { CakeDto } from "modules/cake/dto/cake.dto";

@ApiTags("Cake")
@Controller("cakes")
export class CakeController {
    constructor(private readonly cakeService: CakeService) {}

    @Get()
    @SkipAuth()
    //@ApiBearerAuth()
    async getAll(): Promise<CakeDto[]> {
        const cakes = await this.cakeService.findAll();
        return cakes.map((cake) => new CakeDto(cake));
    }

    // @Get(":id")
    // @ApiBearerAuth()
    // async get(@Param("id") id: string): Promise<UserDto> {
    //     const user = await this.userService.findOne({ id });
    //     return new UserDto(user);
    // }

    // @SkipAuth()
    // @Post()
    // @ApiBearerAuth()
    // async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    //     const newUser = await this.userService.create(createUserDto);
    //     return new UserDto(newUser);
    // }

    // @Patch(":id")
    // @ApiBearerAuth()
    // async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    //     await this.userService.update(id, updateUserDto);
    //     const updatedUser = await this.userService.findOne({ id });
    //     return new UserDto(updatedUser);
    // }

    // @Delete(":id")
    // @ApiBearerAuth()
    // async delete(@Param("id") id: string): Promise<void> {
    //     await this.userService.deleteUser(id);
    // }
}
