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

// const SubInfoContainer = styled("div")`
//   display: flex;
//   position: absolute;
// `;


const  MainSlide2= () => {
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
              <Typography sx={{ marginBottom: "1rem" }}>
              생활 만족도 데이터로 살펴보는
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ margin: "20"  }}>
              내가 살고픈 '서울 자치구'는?
            </Typography>
            {/* <SubInfoContainer>
                <Typography variant="h5" gutterBottom>
                여러분은 지금 생활하고 있는 환경에 만족하고 계신가요?  <br />
                생활 환경에 대해 얼마나 만족하느냐의 문제는 우리의 삶의 질 차원에서도  <br />
                관심 가져봐야 할 문제인데요. 일반적으로 우리 생활 환경을 평가하는 기준은  <br />
                여러가지가 있지만 침수, 미세먼지 등 환경적인 부분을 무시할 수 없습니다.  <br />
                여러분의 생활 환경은 만족할 만한가요? <br />
                서울시 자치구별 주거 환경 만족도를 알아봅시다.
              </Typography>
            </SubInfoContainer> */}
          </Grid>
          <Grid
            xs={5}
            sx={{
              position: "absolute",
              right: "0rem",
              
            }}
          >
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F990E304C5AD48CD833"
              alt="그래프"
              width={500}
              height={450}
            />
          </Grid>
        </Grid>
      </Box>
    </CarouselContainer>
  );
};

export default  MainSlide2;