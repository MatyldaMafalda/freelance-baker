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

    //     async findOne(user: Partial<User>): Promise<User> {
    //         return this.usersRepository.findOneBy({ email: user.email });
    //     }

    async findAll() {
        return await this.cakeRepository.find();
    }

    //     async create(user: CreateUserDto) {
    //         const hashedPassword = await bcrypt.hash(user.password, 10);
    //         return await this.usersRepository.save({
    //             ...user,
    //             password: hashedPassword,
    //         });
    //     }

    //     async getUserIfRefreshTokenMatches(refreshToken: string) {
    //         const tokens = await this.authService.findRefreshTokens();
    //         for (const token of tokens) {
    //             const compare = await bcrypt.compare(refreshToken, token.token);
    //             if (compare) {
    //                 const user = await this.findOne({ id: token.userId });
    //                 return user;
    //             }
    //         }
    //     }

    //     async update(id: string, updateUserDto: UpdateUserDto) {
    //         return await this.usersRepository.update(
    //             { id },
    //             {
    //                 ...updateUserDto,
    //             }
    //         );
    //     }

    //     async hashUserPassword(password: string): Promise<string> {
    //         return await bcrypt.hash(password, 10);
    //     }

    //     async deleteUserRefreshTokens(userId: string) {
    //         await this.authService.deleteRefreshTokens(userId);
    //     }

    //     async deleteUser(id: string) {
    //         await this.usersRepository.delete({ id });
    //     }
    // }
}
