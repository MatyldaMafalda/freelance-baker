import React from "react";
import styled from "styled-components";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { TextInput } from "components/form/TextInput";
import { Button } from "components/common/Button";

const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
});

interface AddUserBakerFormProps {
    handleSubmit: (values: any) => void;
}

export const AddUserBakerForm: React.FC<AddUserBakerFormProps> = ({ handleSubmit }) => {
    const initialValues = { name: "", lastname: "", email: "", password: "" };

    return (
        <Formik<FormikValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ getFieldProps, isValid, isSubmitting }) => {
                return (
                    <FormStyled>
                        <TextInput label={"Name"} {...getFieldProps("name")} />
                        <TextInput label={"Lastname"} {...getFieldProps("lastname")} />
                        <TextInput label={"E-mail"} {...getFieldProps("email")} />
                        <TextInput label={"Password"} {...getFieldProps("password")} />

                        <Button variant={0} type={"submit"} disabled={!isValid || isSubmitting}>
                            Submit
                        </Button>
                    </FormStyled>
                );
            }}
        </Formik>
    );
};
