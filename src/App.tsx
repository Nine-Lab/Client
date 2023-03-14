import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Carousel from "components/common/Carousel";
import SignUp from "components/auth/SignUp";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <Carousel />
        <SignUp />
      </Container>
    </React.Fragment>
  );
}
