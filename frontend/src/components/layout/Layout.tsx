import React from "react";
import styled from "styled-components";

import { Header } from "components/layout/Header";
import { Content } from "components/layout/Content";

import { HEADER_HEIGHT } from "components/layout/layoutConstants";

const PageLayout = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ContentLayout = styled.div`
    display: flex;
    flex-grow: 1;
    max-height: calc(100% - ${HEADER_HEIGHT});
    overflow: hidden;
`;

export const Layout: React.FC = ({ children }) => {

    return (
        <PageLayout>
            <Header />
            <ContentLayout>
                <Content>{children}</Content>
            </ContentLayout>
        </PageLayout>
    );
};
