import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserBakerMutation, UserBakerRequest } from "store";
import { Role } from "types/authTypes";
import { routes } from "routing/routes";
import { AddUserBakerForm } from "components/form/forms/AddUserBakerForm";

export const BakeRegisterPage: React.VFC = () => {
    const [createUserBaker, { isLoading }] = useAddUserBakerMutation();
    const navigate = useNavigate();

    const handleCreateUserBaker = async (newUserBaker: UserBakerRequest) => {
        const requestValues = {
            ...newUserBaker,
            role: Role.Baker,
            baker: {
                cakes: [],
            },
        };
        await createUserBaker(requestValues);
        //TODO: log user in on BE and return tokens
        navigate(routes.signIn.path);
    };

    return (
        <div>
            BakeRegistrationPage
            <AddUserBakerForm handleSubmit={handleCreateUserBaker} />
        </div>
    );
};
