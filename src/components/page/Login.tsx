import { useState, useCallback } from "react";
import styled from "styled-components";
import Modal from "components/page/Modal";

const Title = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: center;
  text-align: center;
`;

const P1 = styled.div`
  font-size: 15px;
  margin 0px 40px;
`;

const P2 = styled.div`
font-size: 15px;
margin 0px 40px;
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
  display: block;
  margin: 3px auto;
  width: 40%;
  height: 2em;
  background: #56B2FE;
  border: none;
  font-size: 20px;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  border-radius: 5px;
  margin 0px 60px;
`;

const Button2 = styled.button`
  display: block;
  margin: 3px auto;
  width: 40%;
  height: 2em;
  background: #56B2FE;
  border: none;
  font-size: 20px;
  color: #FFFFFF;
  cursor: pointer;
  display: block;
  border-radius: 5px;
  margin -39px 410px;
`;

function Login() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Main>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <Title>로그인</Title>
          <P1>아이디</P1>
          <StyledInput
            type="text"
            id="useremail"
            name="useremail"
            className="TextInput"
          />
          <P2>비밀번호</P2>
          <StyledInput
            type="password"
            id="password"
            name="password"
            className="TextInput"
          />
          <Button1 type="button" className="btn">
            로그인
          </Button1>
          <Button2 type="button" className="btn">
            회원가입
          </Button2>
        </Modal>
      )}
      <DialogButton onClick={onClickToggleModal}>로그인</DialogButton>
    </Main>
  );
}

export default Login;
