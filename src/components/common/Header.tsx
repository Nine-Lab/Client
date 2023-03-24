import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Cookies from "js-cookie";

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />, 'Home',
);
export default function Header() {
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleClickSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  const handleClickLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const logoutSubmit = () => {
      Cookies.remove("token");
      alert("로그아웃 완료하였습니다.")
      console.log("로그아웃 완료");
      setIsLoggedIn(false);
      window.location.replace("/")
  }
  
  return (
    <>
      <div style={{ textAlign: "right", overflow: "hidden", minHeight: 0, display: "inline-flex", alignItems: "center" }}>
          <Button href="/">
            <HomeIcon color="primary" />
          </Button>
          {isLoggedIn ? (
            <>
              <Button onClick={logoutSubmit}>LOGOUT</Button>
              <Button href="/profile">My Page</Button>
            </>
          ) : (
            <>
              <Button onClick={() => handleClickLogin()}>LOGIN</Button>
              <Button onClick={() => handleClickSignup()}>JOIN</Button>
              <Button href="/review">Review</Button>
            </>
          )}
        <SignUp isSignupOpen={isSignupOpen} onCloseModal={() => setIsSignupOpen(false)} />
        <Login isLoginOpen={isLoginOpen} onCloseModal={() => setIsLoginOpen(false)} />
      </div>
    </>
  );
};