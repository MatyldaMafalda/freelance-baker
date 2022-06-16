import styled from "styled-components";
import { themeColor } from "styles/styleUtils";

export const LoaderOverlap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.borderRadius.panel};
    background-color: ${themeColor("backgroundMask")};
`;
