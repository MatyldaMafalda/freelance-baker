import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthUser } from "modules/auth/auth-user.class";
import { ROLES_KEY } from "modules/auth/decorators/roles.decorator";
import { getUserFromRequest } from "modules/auth/decorators/user-principal.decorator";
import { Role } from "modules/user/enums/role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const allowedRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!allowedRoles) {
            return true;
        }
        const authUser: AuthUser = getUserFromRequest(context);
        return allowedRoles.some((role) => authUser.role === role);
    }
}
