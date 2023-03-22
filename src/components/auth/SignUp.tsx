import React, { FC, useRef, useState, useCallback, useEffect } from "react";
import * as S from "./Styled";
import axios from "axios";
import Cookies from "js-cookie";

interface SignUpProps {
  isSignupOpen: boolean;
  onCloseModal?: () => void; 
}
const SignUp:FC<SignUpProps> = ({isSignupOpen, onCloseModal}) => {
  console.log({isSignupOpen})
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const [isPwMatch, setIsPwMatch] = useState(true);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const InvalidMessages = {
    name: "2-6글자 한글로 입력해주세요",
    email: "유효하지 않은 이메일 형식입니다",
    password: "비밀번호가 일치하지 않습니다"
  };
// 이름 유효성 검사
  const checkName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nameRegex = /^[가-힣]{2,6}$/;
    setName(e.target.value);
    setIsNameValid(nameRegex.test(e.target.value));
  }, []);

  // 이메일 유효성 검사 //
  const checkEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmail(e.target.value);
    setIsEmailValid(emailRegex.test(e.target.value));
  }, []);

  useEffect(() => {
    if (password && checkPassword) {
      password === checkPassword ? setIsPwMatch(true) : setIsPwMatch(false);
    }
  }, [password, checkPassword]);

  const signupAPI = useCallback(async () => {
    try {
      // console.log("성공");
      const response = await axios.post(
        "https://shiny-shea-devhwann.koyeb.app/api/users/register",
        { name, email, password }
      );
      const { token } = response.data;
      Cookies.set("token", token, { httpOnly: true });
      setOpenModal(false)
      alert("회원가입이 완료되었습니다.");
    } catch (err) {
      // console.log("실패");
      alert("이미 사용중인 이메일입니다.");
    }
  }, [name, email, password]);

  const signupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isNameValid) {
      return nameRef.current?.focus();
    }
    if (!isEmailValid) {
      return emailRef.current?.focus();
    }
    if (isNameValid && isEmailValid && isPwMatch) {
      signupAPI();
    }
  };

  const handleClickModalMask = () => {
    onCloseModal?.()
  }

  return isSignupOpen ? (
    <>
    <div style={{width: '500px', height: '500px', position: "absolute", left: 'calc(50% - 250px)', top: 'calc(50vh - 250px)', zIndex: '10000'}}>
    <form onSubmit={signupSubmit}>
      <div >
          <S.page>
            <S.titleWrap>JOIN</S.titleWrap>
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
                {name
                  ? isNameValid || <div>{InvalidMessages.name}</div>
                  : null}
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
                  value={checkPassword}
                  onChange={(e) => setCheckPassword(e.target.value)}
                  ref={pwRef}
                  placeholder="비밀번호를 한 번 더 입력하세요"
                />
              </S.inputWrap>
              {isPwMatch || (
                <S.errorMessageWrap>
                  {InvalidMessages.password}
                </S.errorMessageWrap>
              )}
            </S.contentWrap>
            <div>
              <S.bottomButton style={{ marginTop: "26px" }}>가입하기</S.bottomButton>
            </div>
          </S.page>
        </div>
    </form>
    </div>
    <div style={{width: '100%', background:'black', opacity: '0.5', height: '100vh', position: 'absolute', left: '0px', zIndex: '9999'}} onClick={handleClickModalMask}></div>
    </>
  ): null;
}
export default SignUp;