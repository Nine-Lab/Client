import React, { PropsWithChildren } from "react";
import styled from "styled-components";
const Title = styled.h1`
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 60px;
    position: absolute;
`;
const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
`;
const DialogBox = styled.dialog`
    width: 800px;
    height: 800px;
    display: flex;
    flex-direction: column;
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

interface ModalDefaultType {
    onClickToggleModal: () => void;
}
export default function ReviewModal({
    onClickToggleModal,
    children,
}: PropsWithChildren<ModalDefaultType>) {
    return (
        <ModalContainer>
            <Title></Title>
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
