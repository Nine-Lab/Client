import React, { FC, useState, useCallback } from "react";
import * as S from "./Styled";
import axios from "axios";
import Cookies from "js-cookie";

interface LoginProps {
    isLoginOpen: boolean;
    onCloseModal?: () => void;
}
const Login:FC<LoginProps> = ({isLoginOpen, onCloseModal}) => {
    console.log({isLoginOpen})
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  //****** 로그인 API ///
    const loginAPI = useCallback(async (email: string, password: string) => {
    try {
        console.log("성공");
        const response = await axios.post(
            "https://server-git-dev-server-nine-lab.vercel.app/api/users/login",
            { email, password },
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
        [email, password],
    );
    //*************

    const handleClickModalMask = () => {
    onCloseModal?.()
    }
    return isLoginOpen ? (
    <>
    <div style={{width: '500px', height: '500px', position: "absolute", left: 'calc(50% - 250px)', top: 'calc(50vh - 250px)', zIndex: '10000'}}>
    <form onSubmit={loginSubmit}>
        <div >
            <S.page>
            <S.titleWrap>Login</S.titleWrap>
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
                    placeholder="비밀번호를 입력하세요(8글자 이상)"
                />
                </S.inputWrap>
            </S.contentWrap>
            <div>
                <S.bottomButton style={{ marginTop: "26px" }}>로그인</S.bottomButton>
            </div>
            </S.page>
        </div>
    </form>
    </div>
    <div style={{width: '100%', background:'black', opacity: '0.5', height: '100vh', position: 'absolute', left: '0px', zIndex: '9999'}} onClick={handleClickModalMask}></div>
    </>
    ): null;
}
export default Login;