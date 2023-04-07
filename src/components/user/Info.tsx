import React, { useRef, useState, useCallback, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import * as S from "../auth/Styled";
import styled from "styled-components";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function InfoModal() {
    const [isOpenModal, setOpen] = React.useState(false);
    const handleInfoOpen = () => setOpen(true);
    const handleInfoClose = () => {
        setOpen(false);
        resetForm();
    }

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

  // 이메일 유효성 검사 ///
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
            const response = await axios.post(
                "https://server-git-dev-server-nine-lab.vercel.app/api/users/register",
                { name, email, password }
            );
            const { token } = response.data;
            Cookies.set("token", token);
            alert("회원가입이 완료되었습니다.");
            resetForm();
            handleInfoClose?.();
        } catch (err) {
            console.log("실패");
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

  // 모달 중간에 나가면 정보 삭제
    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setCheckPassword("");
    };

    return (
        <>
        <div>
        <Button onClick={handleInfoOpen} style={{ marginTop: "100px" }}>
            <InfoLogo src="../../Info_logo.png" alt="내정보수정"/>
        </Button>
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenModal}
        onClose={handleInfoClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
        backdrop: {
            timeout: 500,
        },
        }}>
        <Fade in={isOpenModal}>
        <Box sx={style}>
        <form onSubmit={signupSubmit}>
        <S.titleWrap>회원정보관리</S.titleWrap>
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
                <S.inputTitle style={{ marginTop: "20px" }}>
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
                <S.inputTitle style={{ marginTop: "20px" }}>
                비밀번호
                </S.inputTitle>
                <S.inputWrap>
                <S.Input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="변경할 비밀번호를 입력하세요(8글자 이상)"
                />
                </S.inputWrap>
                <S.inputTitle style={{ marginTop: "20px" }}>
                비밀번호 재확인
                </S.inputTitle>
                <S.inputWrap>
                <S.Input
                    type="password"
                    required
                    value={checkPassword}
                    onChange={(e) => setCheckPassword(e.target.value)}
                    ref={pwRef}
                    placeholder="변경할 비밀번호를 한 번 더 입력하세요(8글자 이상)"
                />
                </S.inputWrap>
                {isPwMatch || (
                <S.errorMessageWrap>
                    {InvalidMessages.password}
                </S.errorMessageWrap>
                )}
            </S.contentWrap>
            <div>
                <S.bottomButton style={{ marginTop: "30px" }}>
                수정하기
                </S.bottomButton>
                </div>
            </form>
        </Box>
        </Fade>
    </Modal>
        </>
    );
    }

    const Button = styled.button`
    display: flex;
    justify-content: center;
    /* justify-content: flex-end; */
    /* margin: 20em auto; */
    width: 100%;
    max-width: 800px;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    `;

    const InfoLogo = styled.img`
    width: 200px;
    height: auto;
    `;