import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

import { routes } from "routing/routes";
import { MEDIA_QUERY, pxToREM, themeColor } from "styles/styleUtils";
import { Role } from "types/authTypes";
import { useAppSelector } from "store";

const Nav = styled.nav`
    display: flex;
    background-color: ${themeColor("white")};
`;

export const NavLink = styled(RouterNavLink)``;

const NavLinkTitle = styled.div`
    flex: 1 0 12rem;
`;

interface NavItem {
    to: string;
    title: string;
}

interface GuarderNavItem {
    to: string;
    title: string;
    allowedRoles: Role[];
}

const PAGE_LIST: NavItem[] = [
    {
        to: routes.dashboard.path,
        title: "About",
    },
    {
        to: routes.signin.path,
        title: "Sign In",
    },
    {
        to: "",
        title: "Thy Cakes",
    },
];

const GUARDED_PAGE_LIST: GuarderNavItem[] = [
    {
        to: routes.bakerAdministration.path,
        title: "Baker Administration",
        allowedRoles: routes.bakerAdministration.allowedRoles,
    },
];

export const Navigation: React.VFC = () => {
    const userRole = useAppSelector((state) => state.auth.userRole);
    return (
        <Nav>
            {userRole &&
                GUARDED_PAGE_LIST.filter(({ allowedRoles }) => allowedRoles.some((role) => role === userRole)).map(
                    ({ to, title }) => (
                        <NavLink to={to} key={title}>
                            <NavLinkTitle>{title}</NavLinkTitle>
                        </NavLink>
                    )
                )}
            {PAGE_LIST.map(({ to, title }) => (
                <NavLink to={to} key={title}>
                    <NavLinkTitle>{title}</NavLinkTitle>
                </NavLink>
            ))}
        </Nav>
    );
};
