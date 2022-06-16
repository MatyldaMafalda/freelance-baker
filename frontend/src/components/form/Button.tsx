import React from "react";
import styled from "styled-components";

import { themeColor } from "styles/styleUtils";

const ButtonStyled = styled.button`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1.25rem;
    border-radius: 0.25rem;
    color: ${themeColor("fontLight")};
    background: ${themeColor("primaryDark")};

    :hover {
        background: ${themeColor("primaryDarkShade")};
    }

    :disabled {
        cursor: auto;
        color: ${themeColor("fontDisabled")};
        background: ${themeColor("primaryDark")};
    }
`;

interface ButtonProps {
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, type = "button", disabled, children, className }) => {
    return (
        <ButtonStyled type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </ButtonStyled>
    );
};
