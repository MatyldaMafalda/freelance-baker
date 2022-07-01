import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "routing/routes";

import { useLogInMutation } from "store";
import { LoginForm } from "components/form/forms/LoginForm";
import { Loader } from "components/common/Loader";

export const LoginPage: React.VFC = () => {
    const navigate = useNavigate();
    const { state: routerState } = useLocation();

    const [logIn, { isLoading }] = useLogInMutation();

    return (
        <>
            <>
                Create an account
                <div>
                    I want to...
                    <button
                        onClick={() => {
                            navigate(routes.bakerRegister.path);
                        }}
                    >
                        Become a Baker
                    </button>
                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Just Eat Cakes
                    </button>
                </div>
            </>
            or sign in
            <LoginForm
                handleSubmit={(values) => {
                    logIn(values)
                        .then(() => navigate((routerState as Location)?.pathname ?? routes.dashboard.path))
                        .catch(() => alert("Wrong credentials"));
                }}
            />
            {isLoading && <Loader size={"4rem"} />}
        </>
    );
};
