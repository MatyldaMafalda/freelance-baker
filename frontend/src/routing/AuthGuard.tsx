import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { routes } from "routing/routes";
import { useAppSelector } from "store";

interface AuthGuardProps {
    children: JSX.Element;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    // const location = useLocation();

    // const isUserAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    // if (!isUserAuthenticated) {
    //     return <Navigate to={routes.login.path} state={location} />;
    // }
    return children;
};
