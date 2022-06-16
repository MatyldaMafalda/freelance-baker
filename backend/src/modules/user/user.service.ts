import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from "bcryptjs";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "modules/user/dto/create-user.dto";
import { User } from "modules/user/user.entity";
import { AuthService } from "modules/auth";
import { Role } from "modules/user/enums/role.enum";
import { BakerService } from "modules/baker/baker.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private bakerService: BakerService
    ) {}

    async findOne(user: Partial<User>): Promise<User> {
        return this.usersRepository.findOneBy({ email: user.email });
    }

    async create(user: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const savedUser = await this.usersRepository.save({
            ...user,
            password: hashedPassword,
        });
        if (user.role === Role.Baker) {
            await this.bakerService.create(user);
        }
        return savedUser;
    }

    async getUserIfRefreshTokenMatches(refreshToken: string) {
        const tokens = await this.authService.findRefreshTokens();
        for (const token of tokens) {
            const compare = await bcrypt.compare(refreshToken, token.token);
            if (compare) {
                const user = await this.findOne({ id: token.userId });
                return user;
            }
        }
    }

    async hashUserPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async deleteUserRefreshTokens(userId: string) {
        await this.authService.deleteRefreshTokens(userId);
    }

    async deleteUser(id: string) {
        await this.usersRepository.delete({ id });
    }
}
