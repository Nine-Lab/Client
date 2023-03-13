import { useState, useCallback } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Title = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: center;
  text-align: center;
`;

const P1 = styled.div`
  font-size: 15px;
  margin: 0px 40px;
`;

const P2 = styled.div`
  font-size: 15px;
  margin: 0px 40px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  color: black;
  background-color: white;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 0px 1118px;

  &:hover {
    transform: translateY(-1px);
  }
`;

const StyledInput = styled.input`
  margin: 1.2em auto;
  display: block;
  font-size: 20px;
  border: 1px solid black;
  width: 90%;
  height: 2.5em;
  border-radius: 5px;
  padding-left: 1em;
  margin-top: 1px;
  margin-bottom: 20px;
`;

const Button1 = styled.button`
  width: 100%;
  border: none;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  padding: 12px 0px;
  text-indent: 6px;
  margin-top: 10px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  background-color: #81c6e8;
  color: white;
`;

function SignUp() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Main>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <Title>회원가입</Title>
          <P1>이름</P1>
          <StyledInput
            type="text"
            id="name"
            name="name"
            className="TextInput"
            placeholder="이름을 입력해주세요"
          />
          <P1>Email</P1>
          <StyledInput
            type="text"
            id="useremail"
            name="useremail"
            className="TextInput"
            placeholder="이메일을 입력해주세요."
          />
          <P2>비밀번호</P2>
          <StyledInput
            type="password"
            id="password"
            name="password"
            className="TextInput"
            placeholder="비밀번호를 입력해주세요."
          />
          <P2>비밀번호 재확인</P2>
          <StyledInput
            type="password"
            id="password"
            name="password"
            className="TextInput"
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
          <Button1 type="button" className="btn">
            회원가입
          </Button1>
        </Modal>
      )}
      <DialogButton onClick={onClickToggleModal}>회원가입</DialogButton>
    </Main>
  );
}

export default SignUp;
