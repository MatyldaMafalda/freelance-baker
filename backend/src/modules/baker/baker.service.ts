import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Baker } from "modules/baker/baker.entity";
import { CreateUserDto } from "../user/dto/create-user.dto";

@Injectable()
export class BakerService {
    constructor(
        @InjectRepository(Baker)
        private bakerRepository: Repository<Baker>
    ) {}

    async create(user: CreateUserDto) {
        return await this.bakerRepository.save({
            user,
            baker: user.baker,
        });
    }
}
