import React, { PropsWithChildren } from "react";
import styled from "styled-components";
interface ModalDefaultType {
    onClickToggleModal: () => void;
}

export default function Modal({
    onClickToggleModal,
    children,
}: PropsWithChildren<ModalDefaultType>) {
    return (
        <ModalContainer>
            <DialogBox>{children}</DialogBox>
            <Backdrop
                onClick={(e: React.MouseEvent) => {
                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                }}
            />
        </ModalContainer>
    );
}

const ModalContainer = styled.div`
    width: 400px;
    height: 500px;
    left: 0px;
    /* display: flex; */
    align-items: center;
    /* justify-content: center; */
    position: absolute;
    bottom: 0px;
    z-index: 1000;
    background: black;
    /* transform: translate(-50%, -50%); */
`;

const DialogBox = styled.dialog`
    position: absolute;
    left: calc(50% - 400px);
    bottom: calc(50vh - 400px);
    width: 800px;
    height: 800px;
    /* display: flex; */
    /* flex-direction: column; */
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: white;
    z-index: 10000;
`;

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
`;
//