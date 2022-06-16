import React from "react";

import { ClassName } from "types";

import logoSrc from "components/layout/logo.png";

export const Logo: React.VFC<ClassName> = ({ className }) => {
    return <img className={className} src={logoSrc} alt={"Cup&Cino logo"} />;
};
