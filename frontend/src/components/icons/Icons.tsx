import React from "react";
import {
    AccountBalance,
    ChevronLeft,
    CoffeeMaker,
    Dashboard,
    Groups,
    Login,
    Logout,
    Search,
    SupervisorAccount,
    Close,
    Delete,
    ModeEdit,
    Ballot,
} from "@styled-icons/material";
import { Cubes } from "@styled-icons/fa-solid/Cubes";
import { Spinner } from "@styled-icons/fa-solid/Spinner";

import { ClassName } from "types";

interface IconProps extends ClassName {
    size?: number | string;
    title?: string;
}

export type IconComponent = React.VFC<IconProps>;

export const BallotIcon: IconComponent = (props) => {
    return <Ballot {...props} />;
};

export const ChevronLeftIcon: IconComponent = (props) => {
    return <ChevronLeft {...props} />;
};

export const CloseIcon: IconComponent = (props) => {
    return <Close {...props} />;
};

export const CustomersIcon: IconComponent = (props) => {
    return <SupervisorAccount {...props} />;
};

export const DashboardIcon: IconComponent = (props) => {
    return <Dashboard {...props} />;
};

export const DeleteIcon: IconComponent = (props) => {
    return <Delete {...props} />;
};

export const KeyAccountIcon: IconComponent = (props) => {
    return <AccountBalance {...props} />;
};

export const LoginIcon: IconComponent = (props) => {
    return <Login {...props} />;
};

export const LogoutIcon: IconComponent = (props) => {
    return <Logout {...props} />;
};

export const MachineIcon: IconComponent = (props) => {
    return <CoffeeMaker {...props} />;
};

export const ModeEditIcon: IconComponent = (props) => {
    return <ModeEdit {...props} />;
};

export const ModuleIcon: IconComponent = (props) => {
    return <Cubes {...props} />;
};

export const SearchIcon: IconComponent = (props) => {
    return <Search {...props} />;
};

export const SpinnerIcon: IconComponent = (props) => {
    return <Spinner {...props} />;
};

export const UsersIcon: IconComponent = (props) => {
    return <Groups {...props} />;
};

export const getIcon = (name: string, props: IconProps) => {
    switch (name) {
        case "KeyAccountIcon":
            return <AccountBalance {...props} />;
    }
};
