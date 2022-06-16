import React from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { LoginRequest } from "store";
import { TextInput } from "components/form/TextInput";
import { Button } from "components/form/Button";
import { LoginIcon } from "components/icons/Icons";

const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;


const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
});

const initialValues: LoginRequest = { email: "", password: "" };

interface LoginFormProps {
    handleSubmit: (values: LoginRequest) => void;
}

export const LoginForm: React.VFC<LoginFormProps> = ({ handleSubmit }) => {
    return (
        <Formik<LoginRequest> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ getFieldProps, isValid }) => {
                return (
                    <FormStyled>
                        <TextInput label={"E-mail"} {...getFieldProps("email")} />
                        <TextInput label={"Password"} type={"password"} {...getFieldProps("password")} />

                        <button type={"submit"} disabled={!isValid}>
                            Log in
                        </button>
                    </FormStyled>
                );
            }}
        </Formik>
    );
};
