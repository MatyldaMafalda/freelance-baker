import React from "react";

import { Role } from "types/authTypes";

export interface Route {
    path: string;
    Page: React.ComponentType;
}

export interface AuthRoute extends Route {
    allowedRoles: Role | Role[];
}

export interface RouteWithParams<T extends Record<string, string>> extends AuthRoute {
    getPath(params: T): string;
}
