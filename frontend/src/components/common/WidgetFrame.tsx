import { Loader } from "components/common/Loader";
import React from "react";
import styled from "styled-components";
import { themeColor } from "styles/styleUtils";

interface WidgetFrameProps {
    isLoading: boolean;
}

export const WidgetFrameStyled = styled.div`
    background-color: ${themeColor("white")};
    width: 100%;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.panel};
    box-shadow: ${({ theme }) => theme.boxShadow.widget};
`;

export const WidgetFrame: React.FC<WidgetFrameProps> = ({ isLoading, children }) => {
    return <WidgetFrameStyled>{isLoading ? <Loader size={"3rem"} /> : children}</WidgetFrameStyled>;
};
