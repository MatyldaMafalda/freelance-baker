import React from "react";
import styled from "styled-components";

const ContentWrap = styled.main`
    flex-grow: 1;
    padding: 2rem;
    overflow: auto;
`;

export const Content: React.FC = ({ children }) => {
    return <ContentWrap>{children}</ContentWrap>;
};
