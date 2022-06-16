import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Baker } from "modules/baker/baker.entity";
import { CakeController } from "modules/cake/cake.controller";
import { Cake } from "modules/cake/cake.entity";
import { CakeService } from "modules/cake/cake.service";

@Module({
    imports: [TypeOrmModule.forFeature([Cake, Baker])],
    controllers: [CakeController],
    exports: [CakeService],
    providers: [CakeService],
})
export class CakeModule {}
