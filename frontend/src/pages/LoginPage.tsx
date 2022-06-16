import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "routing/routes";
import styled from "styled-components";

import { useLogInMutation } from "store";
import { Logo } from "components/logo/Logo";
import { LoginForm } from "components/form/forms/LoginForm";
import { Loader } from "components/common/Loader";
import { themeColor } from "styles/styleUtils";
import { LoaderOverlap } from "components/styled/LoaderOverlap";



const Panel = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 25rem;
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.panel};
    box-shadow: ${({ theme }) => theme.boxShadow.panel};
    background: ${themeColor("white")};
`;

export const LoginPage: React.VFC = () => {
    const navigate = useNavigate();
    const { state: routerState } = useLocation();

    const [logIn, { isLoading }] = useLogInMutation();

    return (
      
            <Panel>
                <LoginForm
                    handleSubmit={(values) => {
                        logIn(values)
                            .then(() => navigate((routerState as Location)?.pathname ?? routes.dashboard.path))
                            .catch(() => alert("Wrong credentials"));
                    }}
                />
                {isLoading && (
                    <LoaderOverlap>
                        <Loader size={"4rem"} />
                    </LoaderOverlap>
                )}
            </Panel>
       
    );
};
