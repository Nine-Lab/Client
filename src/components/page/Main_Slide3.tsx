import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const CarouselContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 250px);
`;

const  MainSlide3= () => {
  return (
    <CarouselContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid
            xs={7}
            sx={{
              height: "450px",
              paddingLeft: "10rem",
            }}>
              <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              생활 만족도 데이터로 살펴보는
            </Typography>
            <Typography align="left" variant="h3" gutterBottom sx={{ margin: "20"  }}>
              내가 살고픈 '서울 자치구'는?
            </Typography>
          </Grid>
          <Grid
            xs={5}
            sx={{
              position: "absolute",
              right: "1rem",
              marginTop: "3rem"
            }}>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F990E304C5AD48CD833"
              alt="그래프"
            />
          </Grid>
        </Grid>
      </Box>
    </CarouselContainer>
  );
};

export default  MainSlide3;