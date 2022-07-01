import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerIcon } from "../icons/Icons";

const LoaderBox = styled.div<{ size: string }>`
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    margin: auto;
`;

const rotateAnimation = keyframes`
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
`;

const LoaderIcon = styled(SpinnerIcon)`
    animation: ${rotateAnimation} 1s linear infinite;
`;

interface LoaderProps {
    size: string;
}

export const Loader: React.VFC<LoaderProps> = ({ size }) => {
    return (
        <LoaderBox size={size}>
            <LoaderIcon size={"100%"} />
        </LoaderBox>
    );
};
