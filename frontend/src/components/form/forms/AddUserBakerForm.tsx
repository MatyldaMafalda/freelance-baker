import React from "react";
import styled from "styled-components";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { TextInput } from "components/form/TextInput";
import { Button } from "components/form/Button";
import { Role } from "types/authTypes";
// import { KeyAccountRequest } from "store";

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
    editData?: any | null;
}

export const  AddUserBakerForm: React.FC<AddUserBakerFormProps> = ({ handleSubmit, editData }) => {
    let initialValues: any;

    if (editData) {
        const { name, keyAccountNumber } = editData;
        initialValues = { name, keyAccountNumber };
    } else {
        initialValues = { name: "", lastname: "", email: "", password: "" };
    }

    return (
        <Formik<FormikValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ getFieldProps, isValid, isSubmitting }) => {
                return (
                    <FormStyled>
                        <TextInput label={"Name"} {...getFieldProps("name")} />
                        <TextInput label={"Lastname"} {...getFieldProps("lastname")} />
                        <TextInput label={"E-mail"} {...getFieldProps("email")} />
                        <TextInput label={"Password"} {...getFieldProps("password")} />

                        <Button type={"submit"} disabled={!isValid || isSubmitting}>
                            Submit
                        </Button>
                    </FormStyled>
                );
            }}
        </Formik>
    );
};
