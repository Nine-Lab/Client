import * as React from "react";
import { GlobalStyle } from "./styles/global-styles";
import Main from "components/page/Main";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main />
    </React.Fragment>
  );
}
