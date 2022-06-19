import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Cake } from "modules/cake/cake.entity";

@Injectable()
export class CakeService {
    constructor(
        @InjectRepository(Cake)
        private cakeRepository: Repository<Cake>
    ) {}

    async findAll() {
        return await this.cakeRepository.find();
    }
}
