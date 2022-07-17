import { Role } from "modules/user/enums/role.enum";

export interface TokenPayload {
    userId: number;
    email: string;
    role: Role;
}
