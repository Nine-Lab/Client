import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Carousel from "components/common/Carousel";
import Main from "components/page/Main";
import Login from "components/page/Login";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Login/>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <Carousel />
        <Main/>
      </Container>
    </React.Fragment>
  );
}
