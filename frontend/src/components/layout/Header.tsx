import React from "react";
import styled from "styled-components";

import { GlobalSearch } from "components/layout/GlobalSearch";
import { LogoutButton } from "components/layout/LogoutButton";
import { Logo } from "components/logo/Logo";
import { MEDIA_QUERY, themeColor } from "styles/styleUtils";

import { HEADER_HEIGHT } from "components/layout/layoutConstants";
import { Navigation } from "components/layout/Navigation";

const HeaderWrap = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    flex: 0 0 ${HEADER_HEIGHT};
    background-color: ${themeColor("white")};
    -webkit-box-shadow: 0px 5px 9px 1px rgba(0,0,0,0.04); 
    box-shadow: 0px 5px 9px 1px rgba(0,0,0,0.04);
`;

const LogoWrapper = styled.div`
    flex: 1 0 auto;
`;

const LogoStyled = styled(Logo)`
    height: 4rem;

    ${MEDIA_QUERY.tabletAndSmaller} {
        height: 3.25rem;
    }
`;

const SearchWrapper = styled.div`
    flex: 3 0 12rem;
    display: flex;
    justify-content: center;
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
            {/* <LogoWrapper>
                <LogoStyled />
            </LogoWrapper> */}
            <NavWrapper>
                <Navigation></Navigation>
                {/* <LogoutButton /> */}
            </NavWrapper>
        </HeaderWrap>
    );
};
