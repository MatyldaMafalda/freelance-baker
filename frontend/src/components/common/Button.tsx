import React from "react";
import styled, { css } from "styled-components";

import { themeColor } from "styles/styleUtils";

interface StyledButtonProps {
    variant: ButtonVariants;
}
const getButtonVariant = (variant: ButtonVariants) => {
    switch (variant) {
        case 0:
            return css`
                background-color: ${themeColor("white")};
            `;

        case 1:
            return css`
                background-color: ${themeColor("white")};
            `;
        default:
            return css`
                background-color: ${themeColor("white")};
            `;
    }
};

const ButtonStyled = styled.button<StyledButtonProps>`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1.25rem;
    border-radius: 0.25rem;
    ${getButtonVariant(0)}
    :hover {
        cursor: pointer;
    }

    :disabled {
        cursor: auto;
    }
`;

enum ButtonVariants {
    lightWithBorder,
    solidPurple,
}

interface ButtonProps {
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
    variant: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = ({ onClick, type = "button", disabled, children, className }) => {
    return (
        <ButtonStyled variant={1} type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </ButtonStyled>
    );
};
