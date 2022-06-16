import { Role, TokenPayload } from "types/authTypes";

export const parseToken = (token: string): TokenPayload => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(payload);
};

export const hasRole = (role: Role, allowedRoles: Role[]): boolean => {
    return allowedRoles.some((allowedRole) => allowedRole === role);
};

export const ALL_ROLES = [Role.Baker, Role.Customer];
export const ADMIN_ROLES = [Role.Baker];
