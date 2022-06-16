import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthUser } from "modules/auth/auth-user.class";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";

export const getUserFromRequest = (ctx: ExecutionContext): AuthUser => {
    const request = ctx.switchToHttp().getRequest();
    return plainToClass(AuthUser, request.user);
};

export const UserPrincipal = createParamDecorator(async (data: unknown, ctx: ExecutionContext) => {
    const user = getUserFromRequest(ctx);
    await validateOrReject(user).catch((errors) => {
        console.error("Unexpected shape of authenticated user object", errors);
        throw new UnauthorizedException(errors);
    });
    return user;
});
