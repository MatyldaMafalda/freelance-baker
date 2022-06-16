import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { routes } from "routing/routes";
import { hasRole } from "utils/authUtils";
import { MEDIA_QUERY, pxToREM, themeColor } from "styles/styleUtils";



const Nav = styled.nav`
    display: flex;
    background-color: ${themeColor("white")};
   
`;

export const NavLink = styled(RouterNavLink)`

`;

// const NavLinkIcon = styled.div<{ isCollapsed: boolean }>`
//     flex: 0 0 ${({ isCollapsed }) => (isCollapsed ? SIDEBAR_ITEM_WIDTH : "3rem")};
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0.75rem;
//     transition: flex-basis ${SIDEBAR_ANIMATION_DURATION} ease-out;

//     ${MEDIA_QUERY.tabletAndSmaller} {
//         flex: 0 0 ${SIDEBAR_ITEM_WIDTH};
//     }
// `;

const NavLinkTitle = styled.div`
    flex: 1 0 12rem;
`;

interface NavItem {
    to: string;
    title: string;
   // allowedRoles: Role[];
   // Icon: IconComponent;
}

const PAGE_LIST: NavItem[] = [
    {
        to: routes.dashboard.path,
        title: "About",
        //allowedRoles: routes.dashboard.allowedRoles,
    },
    {
        to: routes.signin.path,
        title: "Sign In",
       // allowedRoles: routes.keyAccounts.allowedRoles,
    },
    {
        to: routes.register.path,
        title: "Create Account",
        //allowedRoles: routes.keyAccounts.allowedRoles,
    },
    {
        to: '',
        title: "Thy Cakes",
        //allowedRoles: routes.keyAccounts.allowedRoles,
    },
    {
        to: routes.bakerAdministration.path,
        title: "Baker Administration",
        //allowedRoles: routes.keyAccounts.allowedRoles,
    },
];

// interface NavigationProps {
//    // isCollapsed: boolean;
// }

export const Navigation: React.VFC= () => {
   // const role = useCurrentUserRole();
    return (
        <Nav>
            {/* {PAGE_LIST.filter(({ allowedRoles }) => hasRole(role, allowedRoles)).map(({ to, title, Icon }) => ( */}
            {PAGE_LIST.map(({ to, title }) => (
                <NavLink to={to} key={title}>
                    <NavLinkTitle>{title}</NavLinkTitle>
                </NavLink>
            ))}
        </Nav>
    );
};
