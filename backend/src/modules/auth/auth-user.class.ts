import { IsEnum, IsString } from "class-validator";
import { Role } from "modules/user/enums/role.enum";

export class AuthUser {
    @IsString()
    userId: string;

    @IsString()
    email: string;

    @IsEnum(Role)
    role: Role;

    constructor(id: string, email: string, role: Role) {
        this.userId = id;
        this.email = email;
        this.role = role;
    }
}
