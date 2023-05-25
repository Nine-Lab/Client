import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import styled from "styled-components";

export default function LeaveModal() {
    const [isOpenModal, setOpen] = React.useState(false);
    const handleLeaveOpen = () => setOpen(true);
    const handleLeaveClose = () => setOpen(false);

    const handleLeaveConfirm = () => {
    // TODO: 탈퇴 처리 로직 구현
    alert("탈퇴가 완료되었습니다.");
    handleLeaveClose();
    }

    return (
        <div>
        <div>
            <Button onClick={handleLeaveOpen} style={{ marginTop: "100px" }}>
            <InfoLogo src="../../Leave_logo.png" alt="회원탈퇴"/>
            </Button>
        </div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpenModal}
            onClose={handleLeaveClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={isOpenModal}>
            <Box sx={style}>
                <Title>회원탈퇴</Title>
                <ContentWrap>
                <P>
                    ✓ 탈퇴시 작성한 리뷰를 제외한 모든 정보가 삭제됩니다.
                </P>
                <P style={{ marginTop: "10px" }}>
                    ✓ 한번 삭제된 정보는 복구가 불가능합니다.
                </P>
                <P style={{ marginTop: "10px" }}>
                    ✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다. (다른 아이디로 가입)
                </P>
                </ContentWrap>
                <BottomButtonWrapper>
                <BottomButton1 onClick={handleLeaveClose}>돌아가기</BottomButton1>
                <BottomButton2 onClick={handleLeaveConfirm}>탈퇴하기</BottomButton2>
                </BottomButtonWrapper>
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 8,
};

const Title = styled.div`
    text-align: center;
    margin-top: 10px;
    font-size: 26px;
    font-weight: bold;
    color: #262626;
    margin-top: 0%;
`;

const BottomButton1 = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    font-weight: bold;
    border-radius: 64px;
    background-color: #81c6e8;
    color: white;
    margin-bottom: 16px;
    cursor: pointer;
`;
const BottomButton2 = styled.button`
    width: 100%;
    height: 48px;
    border: none;
    font-weight: bold;
    border-radius: 64px;
    background-color: #ff0000;
    color: white;
    margin-bottom: 16px;
    cursor: pointer;
`;

const ContentWrap = styled.div`
    margin-top: 26px;
    flex: 1;
`;

const P = styled.div`
    font-size: 14px;
    color: #262626;
    font-weight: bold;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    justify-content: flex-end;
    margin: 30em auto;
    width: 100%;
    max-width: 800px;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;
    flex-direction: row;
`;

const InfoLogo = styled.img`
    width: 180px;
    height: auto;
`;
const BottomButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;