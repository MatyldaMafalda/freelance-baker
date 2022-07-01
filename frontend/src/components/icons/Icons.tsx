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

export const CloseIcon: IconComponent = (props) => {
    return <Close {...props} />;
};

export const SpinnerIcon: IconComponent = (props) => {
    return <Spinner {...props} />;
};
