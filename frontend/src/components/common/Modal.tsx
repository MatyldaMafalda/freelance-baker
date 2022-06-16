import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled, { keyframes } from "styled-components";
import { CloseIcon } from "components/icons/Icons";
import { themeColor } from "styles/styleUtils";

interface ModalProps {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const openModal = keyframes`
  0% { 
    opacity: 0;  
    top: 35%
   
  }
  100% { 
    opacity: 1; 
    top: 40%
   }
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 5px;
`;

const DialogContentStyled = styled(DialogContent)`
    position: absolute;
    border-radius: 5px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    animation: ${openModal} 0.2s ease-out;
    width: 50vw;
    background-color: ${themeColor("white")};
    padding: 3rem;
    outline: none;
`;

const DialogOverlayStyled = styled(DialogOverlay)`
    background: hsla(0, 0%, 0%, 0.33);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
`;

export const Modal: React.FC<ModalProps> = ({ children, isOpen, setOpen }) => {
    return (
        <DialogOverlayStyled isOpen={isOpen} onDismiss={() => setOpen(false)} dangerouslyBypassScrollLock>
            <DialogContentStyled aria-label={"Modal window"}>
                <CloseButton onClick={() => setOpen(false)}>
                    <CloseIcon size={"2rem"} />
                </CloseButton>
                {children}
            </DialogContentStyled>
        </DialogOverlayStyled>
    );
};
