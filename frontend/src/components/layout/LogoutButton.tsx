import React from "react";
import styled from "styled-components";

import { useLogOutMutation } from "store";
import { LogoutIcon } from "components/icons/Icons";
import { MEDIA_QUERY, themeColor } from "styles/styleUtils";

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;

    background-color: ${themeColor("primaryDark")};
    color: ${themeColor("fontLight")};

    transition: background-color 0.15s ease-out;

    :hover {
        background-color: ${themeColor("primaryDarkShade")};
    }
`;

const TextWrapper = styled.div`
    ${MEDIA_QUERY.tabletAndSmaller} {
        display: none;
    }
`;

export const LogoutButton: React.VFC = () => {
    const [logOut] = useLogOutMutation();

    const handleLogOut = () => {
        logOut();
    };

    return (
        <Button
            onClick={(event) => {
                event.preventDefault();
                handleLogOut();
            }}
        >
            <TextWrapper>Log out</TextWrapper> <LogoutIcon size={"1.5rem"} />
        </Button>
    );
};
