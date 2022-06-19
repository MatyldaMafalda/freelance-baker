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
    @ApiBearerAuth()
    async getAll(): Promise<CakeDto[]> {
        const cakes = await this.cakeService.findAll();
        return cakes.map((cake) => new CakeDto(cake));
    }
}
