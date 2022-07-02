import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "routing/routes";

import { useLogInMutation } from "store";
import { LoginForm } from "components/form/forms/LoginForm";
import { Loader } from "components/common/Loader";
import { Button } from "components/common/Button";

export const LoginPage: React.VFC = () => {
    const navigate = useNavigate();
    const { state: routerState } = useLocation();

    const [logIn, { isLoading }] = useLogInMutation();

    return (
        <>
            sign in
            <LoginForm
                handleSubmit={(values) => {
                    logIn(values)
                        .then(() => navigate((routerState as Location)?.pathname ?? routes.home.path))
                        .catch(() => alert("Wrong credentials"));
                }}
            />
            {isLoading && <Loader size={"1rem"} />}
            create account...
            <div>
                <Button
                    variant={0}
                    onClick={() => {
                        navigate(routes.bakerRegister.path);
                    }}
                >
                    I am a Baker
                </Button>
                <Button
                    variant={0}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    I just eat cakes
                </Button>
            </div>
        </>
    );
};
