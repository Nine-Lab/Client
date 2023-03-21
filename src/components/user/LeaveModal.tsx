import React, { useRef, useState } from "react";
import { useCallback } from "react";
import Modal from "../auth/Modal";
import * as S from "../auth/Styled";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export default function LeaveModal() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const [errorMessage, setErrorMessage] = useState<string>("");

    const emailRef = useRef<HTMLInputElement>(null);

    const [emailValid, setEmailValid] = useState<boolean>(false);

    // const navigate = useNavigate();

    const InvalidMessages = {
        email: "유효하지 않은 이메일 형식입니다",
    };

    const checkEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setEmail(e.target.value);
        setEmailValid(emailRegex.test(e.target.value));
    }, []);

    // 로그인 API
    const LoginAPI = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            console.log("성고옹");
            const response = await axios.post("/api/login", {
                email,
                password,
            });
            const { token } = response.data;
            document.cookie = `token=${token}`;
            // history.push("/main");
        } catch (error) {
            console.log("에러");
            // setErrorMessage("이메일 또는 비밀번호를 확인해주세요.");
        }
    };

    /** 로그인 제출 */
    const loginSubmit = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            // LoginAPI({ email, password });
            setEmail("");
            setPassword("");
        },
        [email, password],
    );

    return (
        <div>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <S.page>
                        <S.titleWrap>로그인</S.titleWrap>
                        <S.contentWrap>
                            <S.LoginForm>
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
                                        ? emailValid || (
                                            <div>{InvalidMessages.email}</div>
                                        )
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
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="비밀번호를 입력하세요"
                                    />
                                </S.inputWrap>
                            </S.LoginForm>
                        </S.contentWrap>
                        <div>
                            <S.bottomButton type="submit">
                                로그인
                            </S.bottomButton>
                        </div>
                    </S.page>
                </Modal>
            )}
            <button onClick={onClickToggleModal}>로그인</button>
        </div>
    );
}
