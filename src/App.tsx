import * as React from "react";
import { GlobalStyle } from "./styles/global-styles";
// import Main from "components/page/Main";
import Login from "components/auth/Login"
import SignUp from "components/auth/SignUp";
import Main from "components/page/Main";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Login />
      <SignUp />
      <Main />
    </React.Fragment>
  );
}
