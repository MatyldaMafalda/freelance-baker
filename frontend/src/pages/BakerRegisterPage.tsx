import { AddUserBakerForm } from "components/form/forms/AddUserBakerForm";
import React from "react";
import { useAddUserBakerMutation, UserBakerRequest } from "store";
import { Role } from "types/authTypes";

export const BakeRegisterPage: React.VFC = () => {
const [createUserBaker, { isLoading }] = useAddUserBakerMutation();
    const handleCreateUserBaker = async (values: UserBakerRequest) => {
        const requestValues = {...values,role: Role.Baker, baker: {
            cakes: []
        }}
        await createUserBaker(requestValues);
    };

    return (
        <>
            <div>BakeRegistrationPage
            <AddUserBakerForm handleSubmit={handleCreateUserBaker} />
            </div>
        </>
    );
};
