import React from "react";
import { useNavigate } from "react-router";
import { routes } from "routing/routes";

export const RegisterPage: React.VFC = () => {

const navigate = useNavigate();
    return (
        <>
            <div>I want to...
                <button onClick={() => { navigate(routes.bakerRegister.path) }}>Become a Baker</button>
                <button onClick={() =>{navigate('/')  }}>Just Eat Cakes</button>
            </div>
        </>
    );
};
