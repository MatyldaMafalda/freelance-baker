import { DashboardPage, KeyAccountsPage, NotFoundPage, LoginPage } from "pages";
import { BakeRegisterPage } from "pages/BakerRegisterPage";
import { RegisterPage } from "pages/RegisterPage";

import { Role } from "types/authTypes";
import { AuthRoute, Route } from "types/routingTypes";
import { ADMIN_ROLES, ALL_ROLES } from "utils/authUtils";

interface Routes {
    dashboard: Route;
    register: Route;
    bakerRegister: Route;
    bakerAdministration: AuthRoute;
    notFound: Route;
    signin: Route;
}

export const routes: Routes = {
    dashboard: {
        path: "/",
        Page: DashboardPage,
    },
    
    register: {
        path: "/register",
        Page: RegisterPage,
    },
    bakerRegister: {
        path: "/baker-register",
        Page: BakeRegisterPage,
    },
    bakerAdministration: {
        path: "/baker-admin",
        Page: KeyAccountsPage,
        allowedRoles: Role.Baker,
    },
    notFound: {
        path: "/not-found",
        Page: NotFoundPage,
    },
    signin: {
        path: "/signin",
        Page: LoginPage,
    },
};

export const publicRouteList: Route[] = Object.values(routes).filter((route) => !route.allowedRoles);
console.log(publicRouteList)
// AUTHORIZED routes list
export const roleGuardedRouteList: AuthRoute[] =  Object.values(routes).filter((route) => route.allowedRoles === Role.Baker) as AuthRoute[];

// // // UNAUTHORIZED routes list
//  export const unguardedRoutesList: Route[] = routesList
