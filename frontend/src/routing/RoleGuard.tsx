import React from "react";
import { Navigate } from "react-router-dom";

import { routes } from "routing/routes";
import { useAppSelector, useCurrentUserRole } from "store";
import { Role } from "types/authTypes";
import { hasRole } from "utils/authUtils";

interface RoleGuardProps {
    allowedRoles: Role | Role[];
}

export const RoleGuard: React.FC<RoleGuardProps> = ({ children, allowedRoles }) => {
    // const role = useCurrentUserRole();
    const role = useAppSelector((state) => state.auth.userRole);
    console.log(role)
    console.log(allowedRoles)
    if (role !== allowedRoles) {
        console.log('here')
        return <Navigate to={routes.notFound.path} />;
    }
    return <>{children}</>;
};
