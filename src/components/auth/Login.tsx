import React, { useState } from "react";
import { useCallback } from "react";
import Modal from "./Modal";
import * as S from "./Styled";
import axios from "axios";
import Cookies from "js-cookie";
import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";

export default function Login() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //****** 로그인 API
  const loginAPI = useCallback(async (email: string, password: string) => {
    try {
      console.log("성공");
      const response = await axios.post(
        "https://shiny-shea-devhwann.koyeb.app/api/users/login",
        { email, password }
      );
      const { token } = response.data;
      Cookies.set("token", token, { httpOnly: true });
      setOpenModal(false);
    } catch (err) {
      console.log("실패");
      alert("이메일 또는 비밀번호를 확인해주세요.");
    }
  }, []);

  const loginSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      loginAPI(email, password);
      setEmail("");
      setPassword("");
    },
    [email, password]
  );
  //*************

  return (
    <ErrorBoundary fallback={Error}>
    <form onSubmit={loginSubmit}>
      <div>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <S.page>
              <S.titleWrap>로그인</S.titleWrap>
              <S.contentWrap>
                <S.LoginForm>
                  <S.inputTitle>
                    이메일 주소
                  </S.inputTitle>
                  <S.inputWrap>
                    <S.Input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일을 입력하세요"
                    />
                  </S.inputWrap>
                  <S.inputTitle>
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
                </S.LoginForm>
              </S.contentWrap>
              <div>
                <S.bottomButton type="submit">로그인</S.bottomButton>
              </div>
            </S.page>
          </Modal>
        )}
        <S.headerButton onClick={onClickToggleModal}>로그인</S.headerButton>
      </div>
    </form>
    </ErrorBoundary>
  );
}