import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { createSvgIcon } from "@mui/material/utils";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Cookies from "js-cookie";

const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home",
);
export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        if (Cookies.get("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const logoutSubmit = () => {
        Cookies.remove("token");
        alert("로그아웃 완료하였습니다.");
        console.log("로그아웃 완료");
        setIsLoggedIn(false);
        window.location.replace("/");
    };

    return (
        <>
            <div style={{ textAlign: "right", marginRight: "3rem" }} className="header">
                <Button href="/">
                    <HomeIcon />
                </Button>
                {isLoggedIn ? (
                    <>
                        <Button onClick={logoutSubmit}>LOGOUT</Button>
                        <Button href="/mypage">My Page</Button>
                    </>
                ) : (
                    <>
                        <Button>
                            <Login />
                        </Button>
                        <Button>
                            <SignUp />
                        </Button>
                    </>
                )}
                <Button href="/review">Review</Button>
                <Button href="/hood">Hood</Button>
            </div>
        </>
    );
}
