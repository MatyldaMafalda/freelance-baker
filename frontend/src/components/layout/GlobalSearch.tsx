import React from "react";
import styled from "styled-components";

import { SearchIcon } from "components/icons/Icons";
import { themeColor } from "styles/styleUtils";

import { HEADER_ITEM_HEIGHT } from "components/layout/layoutConstants";

const SearchBar = styled.label`
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    max-width: 30rem;
    height: ${HEADER_ITEM_HEIGHT};
    border-radius: 0.5rem;
    background-color: white;
    color: ${themeColor("fontDark")};
    font-size: 1.5rem;
`;

const SearchIconWrap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    height: ${HEADER_ITEM_HEIGHT};
    width: ${HEADER_ITEM_HEIGHT};
`;

const SearchInput = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    padding-left: ${HEADER_ITEM_HEIGHT};
    border-radius: 0.5rem;
`;

export const GlobalSearch: React.VFC = () => {
    return (
        <SearchBar>
            <SearchIconWrap>
                <SearchIcon size={"2rem"} />
            </SearchIconWrap>
            <SearchInput />
        </SearchBar>
    );
};
