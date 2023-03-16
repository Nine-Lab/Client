import * as React from "react";
import { GlobalStyle } from "./styles/global-styles";
import Main from "components/page/Main";
import Login from "components/auth/Login"
import SignUp from "components/auth/SignUp";
import Leave from "components/page/Leave";
import Info from "components/page/Info";
import Admin from "components/page/Admin";
import Main from "components/page/Main";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main />
      <Login />
      <SignUp />
      <Leave />
      <Info />
      <Admin />
      <Login />
      <SignUp />
      <Main />
    </React.Fragment>
  );
}
