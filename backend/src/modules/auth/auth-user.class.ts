import { IsEnum, IsNumber, IsString } from "class-validator";
import { Role } from "modules/user/enums/role.enum";

export class AuthUser {
    @IsNumber()
    userId: number;

    @IsString()
    email: string;

    @IsEnum(Role)
    role: Role;

    constructor(id: number, email: string, role: Role) {
        this.userId = id;
        this.email = email;
        this.role = role;
    }
}
