import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ChartCotainer from "../chart/chartData";

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
const CarouselSection2 = () => {
    return (
        <CarouselContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid
                        xs={8}
                        sx={{
                            height: "450px",
                            paddingLeft: "10rem",
                        }}
                    >
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{ margin: "0" }}
                        >
                            서울, <br />
                            미세먼지 어때?
                        </Typography>

                        <br />
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "2rem" }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ marginBottom: "2rem" }}
                            >
                                미세먼지는 인간의 수명을 단축시키는 대기오염
                                물질입니다.
                            </Typography>
                        </Typography>
                        <SubInfoContainer>
                            <Typography variant="subtitle1" gutterBottom>
                                우리 눈에 보이지 않을 정도로 작은 먼지
                                입자로입자 크기에 따라
                                <br />
                                직경 10㎍이하(10㎍=0.001cm)인것을
                                미세먼지(PM10)라고 합니다.
                                <br />
                                <br />
                                미세먼지는 보통 실외 공기질에만 영향을 끼친다고
                                생각을 할텐데요.
                                <br />
                                이러한 미세먼지가 실내 공기에도 영향을 끼친다는
                                사실, 알고 계셨나요?
                            </Typography>
                        </SubInfoContainer>
                    </Grid>
                    <Grid
                        xs={6}
                        sx={{
                            position: "absolute",
                            right: "1rem",
                            // marginTop: "3rem",
                        }}
                    >
                        <ChartCotainer />
                    </Grid>
                </Grid>
            </Box>
        </CarouselContainer>
    );
};

export default CarouselSection2;
