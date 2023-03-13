import React, { useEffect, useState, useCallback } from "react";
import Modal from "./Modal";
import * as S from "./styled";

const User = {
  email: "test@example.com",
  pw: "test2323@@@",
};

export default function Login() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // 확인버튼 활성화
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = e => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = e => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  // 확인버튼 alert 창
  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  return (
    <div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <S.page>
            <S.titleWrap>로그인</S.titleWrap>

            <S.contentWrap>
              <S.inputTitle>이메일 주소</S.inputTitle>
              <S.inputWrap>
                <S.Input
                  className="input"
                  type="text"
                  placeholder="test@gmail.com"
                  value={email}
                  onChange={handleEmail}
                />
              </S.inputWrap>
              <S.errorMessageWrap>
                {!emailValid && email.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )}
              </S.errorMessageWrap>

              <S.inputTitle style={{ marginTop: "26px" }}>
                비밀번호
              </S.inputTitle>
              <S.inputWrap>
                <S.Input
                  className="input"
                  type="password"
                  placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                  value={pw}
                  onChange={handlePw}
                />
              </S.inputWrap>
              <S.errorMessageWrap>
                {!pwValid && pw.length > 0 && (
                  <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
              </S.errorMessageWrap>
            </S.contentWrap>

            <div>
              <S.bottomButton
                onClick={onClickConfirmButton}
                disabled={notAllow}
              >
                확인
              </S.bottomButton>
            </div>
          </S.page>
        </Modal>
      )}
      <button onClick={onClickToggleModal}>로그인</button>
    </div>
  );
}
