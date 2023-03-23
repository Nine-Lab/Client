import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createSvgIcon } from '@mui/material/utils';
import Login from "../auth/Login"
import SignUp from "../auth/SignUp"
import {useState, useCallback } from 'react';
import Box from '@mui/material/Box';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,'Home',
)

export default function Header() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const handleClickSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  }

  const handleClickLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  }

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    ></Box>
    <div style={{textAlign: "right"}}>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/">
          <HomeIcon color="primary" />
        </Button>
        <React.Fragment>
        <Button onClick={() => handleClickLogin()}>LOGIN</Button>
        <Button href="/review">Review</Button>
        <Button href="/">MYPAGE</Button>
        <Button onClick={() => handleClickSignup()}>JOIN</Button>
        </React.Fragment>
      </ButtonGroup>
      <SignUp isSignupOpen={isSignupOpen} onCloseModal={() => setIsSignupOpen(false)}/>
      <Login isLoginOpen={isLoginOpen} onCloseModal={() => setIsLoginOpen(false)}/>
    </div>
    </>
  );
}