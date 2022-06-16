import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BakerController } from "modules/baker/baker.controller";
import { Baker } from "modules/baker/baker.entity";
import { BakerService } from "modules/baker/baker.service";
import { Cake } from "modules/cake/cake.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Baker, Cake])],
    controllers: [BakerController],
    exports: [BakerService],
    providers: [BakerService],
})
export class BakerModule {}
