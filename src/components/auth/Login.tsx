import React, { FC, useState, useCallback } from "react";
import * as S from "./Styled";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface DecodedToken {
    userId: string;
  }
  //쿠키에 저장된 JWT 토큰에서 userId를 가져오는 기능
  const getUserId = () => {
    const token = Cookies.get("token"); // 쿠키에서 토큰을 검색
    if (token) {
      //토큰이 발견되면 토큰을 디코딩하고 userId를 추출
      const decoded: DecodedToken = jwt_decode(token);
      const { userId } = decoded;
      return userId;
    }
    return null; // 토큰을 찾을 수 없으면 null을 반환
  };

export default function LoginModal() {
  const [isOpenModal, setOpen] = React.useState(false);
  const handleLoginOpen = () => setOpen(true);
  const handleLoginClose = () => setOpen(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState(false);

  const handleButtonClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    window.location.replace("/");
  }

  //* 로그인 API
  const loginAPI = useCallback(async (email: string, password: string) => {
    try {
      const response = await axios.post(
        //이메일 및 암호와 함께 로그인 API로 POST 요청
        "https://server-git-dev-server-nine-lab.vercel.app/api/users/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const { token } = response.data; //API 응답에서 JWT 토큰 추출
      Cookies.set("token", token); //쿠키 토큰에 저장
      const userId = getUserId(); //JWT 토큰에서 userId를 검색
      if (userId) {
        // userId가 발견되면 콘솔에 기록
        console.log("Logged in user ID:", userId);
      }
      handleLoginClose?.();
      handleButtonClick();
    } catch (err) {
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

  // 모달 중간에 나가면 정보 삭제
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
//   const handleClickModalMask = () => {
//     resetForm();
//     handleLoginClose?.();
//   };

  return (
    <div >
        <Button onClick={handleLoginOpen}>Login</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpenModal}
            onClose={handleLoginClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}>
        <Fade in={isOpenModal}>
        <Box sx={style}>
        <form onSubmit={loginSubmit}>
        <div>
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
                <S.bottomButton style={{ marginTop: "26px" }}>
                    로그인
                </S.bottomButton>
            </div>
        </div>
        </form>
        {/* <div onClick={handleClickModalMask}></div> */}
        </Box>
        </Fade>
    </Modal>
    </div>
    );
}