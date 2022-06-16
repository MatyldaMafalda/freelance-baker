import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Baker } from "modules/baker/baker.entity";

@Injectable()
export class BakerService {
    constructor(
        @InjectRepository(Baker)
        private bakerRepository: Repository<Baker>
    ) {}

    async create(user: any) {
        return await this.bakerRepository.save({
            user,
            baker: user.baker,
        });
    }
}
