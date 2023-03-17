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

const SubInfoContainer = styled("div")`
  display: flex;
  position: absolute;
`;

const MainSlide2 = () => {
  return (
    <CarouselContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            xs={8}
            sx={{
              height: "450px",
              paddingLeft: "10rem"
            }}
          >
            <Typography variant="h2" gutterBottom sx={{ marginBottom: "1rem"}}>
              서울, <br />
              어디가 안전할까?
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "5rem" }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginBottom: "2rem" }}
              >
                예기치 못한 침수는 소중한 삶의 터전을 잃을 수 있습니다.
              </Typography>
            </Typography>
            <SubInfoContainer>
              <Typography
                variant="subtitle1"
                gutterBottom
              >
                홍수의 위험성에 대한 인식을 높이기 위해 홍수 조절 인프라를 구축하며
                <br />
                주거환경에 미치는 홍수의 영향을 완화하기 위한 다양한 조치가 시행되고 있습니다.
                <br />
                이러한 노력에도 불구하고, 홍수는 우리나라의 중요한 과제로 남아 있습니다.
              </Typography>
            </SubInfoContainer>
          </Grid>
          <Grid
            xs={5}
            sx={{
              position: "absolute",
              right: "1rem",
              marginTop: "3rem"
            }}
          >
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

export default MainSlide2;