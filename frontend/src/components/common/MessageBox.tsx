import React from "react";
import styled from "styled-components";

const MessageBoxStyled = styled.p``;

export const MessageBox: React.FC = ({ children }) => {
    return <MessageBoxStyled>{children}</MessageBoxStyled>;
};
