import React, { useRef, useState } from "react";
import { useCallback } from "react";
import Modal from "./Modal";
import * as S from "./Styled";

export default function Login() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  
  const [emailValid, setEmailValid] = useState(false);
  const InvalidMessages = {
    email: "유효하지 않은 이메일 형식입니다",
  };

  const checkEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      setEmail(e.target.value);
      setEmailValid(emailRegex.test(e.target.value));
    },
    []
  );


  return (
    <div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <S.page>
            <S.titleWrap>로그인</S.titleWrap>
            <S.contentWrap>
              <S.inputTitle style={{ marginTop: "26px" }}>
                이메일 주소
              </S.inputTitle>
              <S.inputWrap>
                <S.Input
                  type="text"
                  required
                  value={email}
                  onChange={checkEmail}
                  ref={emailRef}
                  placeholder="이메일을 입력하세요"
                />
              </S.inputWrap>
              <S.errorMessageWrap>
                {email
                  ? emailValid || <div>{InvalidMessages.email}</div>
                  : null}
              </S.errorMessageWrap>
              <S.inputTitle style={{ marginTop: "26px" }}>
                비밀번호
              </S.inputTitle>
              <S.inputWrap>
                <S.Input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                />
              </S.inputWrap>

            </S.contentWrap>
            <div>
              <S.bottomButton>
                로그인</S.bottomButton>
            </div>
          </S.page>
        </Modal>
      )}
      <button onClick={onClickToggleModal}>로그인</button>
    </div>
  );
}