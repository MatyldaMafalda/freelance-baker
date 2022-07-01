import React from "react";
import { Navigate } from "react-router-dom";

import { routes } from "routing/routes";
import { useAppSelector } from "store";
import { Role } from "types/authTypes";

interface RoleGuardProps {
    allowedRoles: Role[];
}

export const RoleGuard: React.FC<RoleGuardProps> = ({ children, allowedRoles }) => {
    const role = useAppSelector((state) => state.auth.userRole);
    if (!role || !allowedRoles.includes(role)) {
        return <Navigate to={routes.notFound.path} />;
    }
    return <>{children}</>;
};
