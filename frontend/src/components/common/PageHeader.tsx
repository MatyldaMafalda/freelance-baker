import React from "react";
import styled from "styled-components";

interface PageHeaderProps {
    title: string;
    children?: React.ReactNode;
}

const PageHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
`;

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    return (
        <PageHeaderStyled>
            <h1>{title}</h1>
            {children}
        </PageHeaderStyled>
    );
};
