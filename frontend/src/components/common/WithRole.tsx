import React from "react";

import { useCurrentUserRole } from "store";
import { Role } from "types/authTypes";
import { hasRole } from "utils/authUtils";

interface WithRoleProps {
    allowedRoles: Role[];
}

export const WithRole: React.FC<WithRoleProps> = ({ children, allowedRoles }) => {
    const role = useCurrentUserRole();

    if (!hasRole(role, allowedRoles)) {
        return null;
    }
    return <>{children}</>;
};
