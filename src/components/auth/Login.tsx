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

  const emailRef = useRef();

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
                  onChange={(e) => setEmail(e.target.value)}
                  ref={emailRef}
                  placeholder="이메일을 입력하세요"
                />
              </S.inputWrap>
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
      <button onClick={onClickToggleModal}>Login</button>
    </div>
  );
}