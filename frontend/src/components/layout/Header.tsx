import React from "react";
import styled from "styled-components";

import { MEDIA_QUERY, themeColor } from "styles/styleUtils";

import { HEADER_HEIGHT } from "components/layout/layoutConstants";
import { Navigation } from "components/layout/Navigation";
import { Button } from "components/common/Button";
import { useAppSelector, useLogOutMutation } from "../../store";

const HeaderWrap = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    flex: 0 0 ${HEADER_HEIGHT};
    background-color: ${themeColor("white")};
    -webkit-box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.04);
`;

const NavWrapper = styled.nav`
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-left: auto;
`;

export const Header: React.VFC = () => {
    return (
        <HeaderWrap>
            <NavWrapper>
                <Navigation></Navigation>
            </NavWrapper>
        </HeaderWrap>
    );
};
