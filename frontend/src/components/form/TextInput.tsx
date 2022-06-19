import React from "react";
import styled from "styled-components";
import { FieldInputProps } from "formik";

const InputWrapper = styled.label`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const LabelText = styled.p`
    font-size: 1.25rem;
`;

const InputStyled = styled.input`
    height: 3rem;
    padding: 0.5rem 1rem;
`;

interface TextInputProps extends FieldInputProps<string> {
    label: string;
    placeholder?: string;
    type?: string;
}

export const TextInput: React.VFC<TextInputProps> = ({ label, type = "text", ...props }) => {
    return (
        <InputWrapper>
            <LabelText>{label}</LabelText>
            <InputStyled type={type} {...props} />
        </InputWrapper>
    );
};
