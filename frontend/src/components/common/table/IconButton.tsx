import React from "react";
import styled from "styled-components";

import { themeColor } from "styles/styleUtils";

const IconButtonStyled = styled.button<{ variant: string }>`
    height: 2.5rem;
    margin: 0 0.75rem;
    color: ${themeColor("fontDark")};
    border: solid 1px ${themeColor("fontDark")};
    border-radius: 0.5rem;
    background: transparent;
    transition: all 0.2s;

    :hover {
        color: ${({ variant }) => (variant === "delete" ? themeColor("redAlert") : themeColor("primary"))};
        border-color: ${({ variant }) => (variant === "delete" ? themeColor("redAlert") : themeColor("primary"))};
    }

    :disabled {
        cursor: auto;
        color: ${themeColor("fontDisabled")};
        background: ${themeColor("primaryDark")};
    }
`;

interface IconButtonProps {
    onClick?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    title?: string;
    variant?: "regular" | "delete";
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, disabled, children, title, variant = "regular" }) => {
    return (
        <IconButtonStyled type={"button"} onClick={onClick} disabled={disabled} title={title} variant={variant}>
            {children}
        </IconButtonStyled>
    );
};
