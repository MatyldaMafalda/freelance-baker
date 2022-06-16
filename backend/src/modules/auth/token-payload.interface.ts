import { Role } from "modules/user/enums/role.enum";

export interface TokenPayload {
    userId: string;
    email: string;
    role: Role;
}
