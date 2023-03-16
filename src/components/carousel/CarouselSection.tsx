import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CarouselContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 250px);

  img {
    border-radius: 50%;
  }
`;

const SubInfoContainer = styled("div")`
  display: flex;
  position: absolute;
`;

const CarouselSection = () => {
  return (
    <CarouselContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            xs={7}
            sx={{
              height: "450px",
              paddingLeft: "10rem",
            }}
          >
            <Typography variant="h2" gutterBottom sx={{ margin: "0" }}>
              동네어때?
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ marginBottom: "2rem" }}
            >
              서울시 자치구별 주거환경 정보를 찾아보세요!
            </Typography>
            <Button variant="contained">시작하기</Button>
            <SubInfoContainer sx={{ width: "40%", paddingTop: "2.5rem" }}>
            <Typography variant="h5" gutterBottom>
                미세먼지 &nbsp;&nbsp;
                <Typography variant="caption" display="block" gutterBottom>
                우리 눈에 보이지 않을 정도로 작은 먼지 입자로 입자 크기에 따라 직경 10㎍이하 인것을
                미세먼지(PM10)라고 합니다. 미세먼지는 보통 실외 공기질에만 영향을 끼친다고 생각을 할텐데요.
                이러한 미세먼지가 실내 공기에도 영향을 끼친다는 사실, 알고 계셨나요? 
                </Typography>
                <Typography variant="h5" gutterBottom>
                  <br />
                침수
                <Typography variant="caption" display="block" gutterBottom>
                홍수는 우리나라에서 중대한 자연재해이며, 도시의 침수는 주거환경에 큰 영향을 미치고 있습니다. 
                홍수의 위험성에 대한 인식을 높이기 위해 홍수 조절 인프라 구축 등 주거환경에 미치는 홍수의 영향을 
                완화하기 위한 다양한 조치가 시행되고 있습니다. 
                이러한 노력에도 불구하고, 홍수는 우리나라의 중요한 과제로 남아 있습니다.
                </Typography>
              </Typography>

              </Typography>
              
            </SubInfoContainer>
          </Grid>
          <Grid
            xs={5}
            sx={{
              position: "absolute",
              right: "5rem",
            }}
          >
            <img
              src="https://img.freepik.com/premium-vector/sky-cloud-daily-illustration-with-cartoon-cirrus-cumulus-white-clouds-rays-sun-illustration_1284-62767.jpg?w=2000"
              alt="이미지 뭐하지? 미정"
              width={500}
              height={450}
            />
          </Grid>
        </Grid>
      </Box>
    </CarouselContainer>
  );
};

export default CarouselSection;
