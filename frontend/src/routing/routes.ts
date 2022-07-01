import { DashboardPage, BakerAdminPage, NotFoundPage, LoginPage } from "pages";
import { BakeRegisterPage } from "pages/BakerRegisterPage";

import { Role } from "types/authTypes";
import { AuthRoute, Route } from "types/routingTypes";

interface Routes {
    dashboard: Route;
    bakerRegister: Route;
    bakerAdministration: AuthRoute;
    notFound: Route;
    signIn: Route;
}

export const routes: Routes = {
    dashboard: {
        path: "/",
        Page: DashboardPage,
    },
    bakerRegister: {
        path: "/baker-register",
        Page: BakeRegisterPage,
    },
    bakerAdministration: {
        path: "/baker-admin",
        Page: BakerAdminPage,
        allowedRoles: [Role.Baker],
    },
    notFound: {
        path: "/not-found",
        Page: NotFoundPage,
    },
    signIn: {
        path: "/sign-in",
        Page: LoginPage,
    },
};

export const publicRouteList: Route[] = Object.values(routes).filter((route) => !route.allowedRoles);
export const roleGuardedRouteList: AuthRoute[] = Object.values(routes).filter(
    (route) => route.allowedRoles
) as AuthRoute[];
