import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserCustomerDto } from "modules/user/dto/create-user-customer.dto";
import { User } from "modules/user/user.entity";
import { AuthService } from "modules/auth";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
    ) {}

    async findOne(user: Partial<User>): Promise<User> {
        return this.usersRepository.findOneBy({ email: user.email });
    }

    async create(user: User) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const savedUser = await this.usersRepository.save({
            ...user,
            password: hashedPassword,
        });
        return savedUser;
    }

    async getUserIfRefreshTokenMatches(refreshToken: string) {
        const tokens = await this.authService.findRefreshTokens();
        for (const token of tokens) {
            const compare = await bcrypt.compare(refreshToken, token.token);
            if (compare) {
                const user = await this.findOne({ id: token.user.id });
                return user;
            }
        }
    }

    async deleteUserRefreshTokens(userId: number) {
        await this.authService.deleteRefreshTokens(userId);
    }

    async deleteUser(id: number) {
        await this.usersRepository.delete({ id });
    }
}
