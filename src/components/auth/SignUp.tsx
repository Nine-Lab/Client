
import React, { useRef, useState, useEffect } from "react";
import { useCallback } from "react";
import Modal from "./Modal";
import * as S from "./Styled";

export default function SignUp() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const [isPwMatch, setIsPwMatch] = useState<boolean>(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  /** 유효성체크 메세지 */
  const InvalidMessages = {
    name: "2-6글자 한글로 입력해주세요",
    email: "유효하지 않은 이메일 형식입니다",
    password: "비밀번호가 일치하지 않습니다"
  };

  /** 이름 유효성 검사 */
  const checkName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nameRegex = /^[가-힣]{2,6}$/;
      setName(e.target.value);
      setIsNameValid(nameRegex.test(e.target.value));
    },
    [name]
  );

  /** 이메일 유효성 검사 */
  const checkEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      setEmail(e.target.value);
      setIsEmailValid(emailRegex.test(e.target.value));
    },
    []
  );


  useEffect(() => {
    if (password && passwordConfirm) {
      password === passwordConfirm ? setIsPwMatch(true) : setIsPwMatch(false);
    }
  }, [password, passwordConfirm]);

  return (
    <div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <S.page>
            <S.titleWrap>회원가입</S.titleWrap>
            <S.contentWrap>
              <S.inputTitle>이름</S.inputTitle>
              <S.inputWrap>
                <S.Input
                  type="text"
                  required
                  value={name}
                  onChange={checkName}
                  ref={nameRef}
                  placeholder="이름을 입력하세요(2 - 6글자)"
                />
              </S.inputWrap>
              <S.errorMessageWrap>
                {name ? isNameValid || <div>{InvalidMessages.name}</div> : null}
              </S.errorMessageWrap>

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
                  ? isEmailValid || <div>{InvalidMessages.email}</div>
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
                  placeholder="비밀번호를 입력하세요(8글자 이상)"
                />
              </S.inputWrap>
              <S.inputTitle style={{ marginTop: "26px" }}>
                비밀번호 재확인
              </S.inputTitle>
              <S.inputWrap>
                <S.Input
                  type="password"
                  required
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  ref={pwRef}
                  placeholder="비밀번호를 한 번 더 입력하세요"
                />
              </S.inputWrap>
              <S.errorMessageWrap>
                {isPwMatch || <div>{InvalidMessages.password}</div>}
              </S.errorMessageWrap>
            </S.contentWrap>
            <div>
              <S.bottomButton>가입하기</S.bottomButton>
            </div>
          </S.page>
        </Modal>
      )}
      <button onClick={onClickToggleModal}>SignUp</button>
    </div>
  );
}
