import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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

const SubInfoCotainer = styled("div")`
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
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{ margin: "0" }}
                        >
                            동네어때?
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ marginBottom: "2rem" }}
                        >
                            서울시 자치구별 주거환경 정보를 찾아보세요!
                        </Typography>
                        <Link to="/hood">
                            <Button variant="contained">시작하기</Button>
                        </Link>

                        <SubInfoCotainer
                            sx={{ width: "40%", paddingTop: "6.5rem" }}
                        >
                            <Typography variant="h6" gutterBottom>
                                미세먼지 정보 &nbsp;&nbsp;
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cupiditate nobis dolores
                                    ullam, temporibus maxime possimus inventore
                                    atque fuga quas ea aliquid, ex iure? Sequi
                                </Typography>
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                침수관련 정보
                                <Typography
                                    variant="caption"
                                    display="block"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cupiditate nobis dolores
                                    ullam, temporibus maxime possimus inventore
                                    atque fuga quas ea aliquid, ex iure? Sequi
                                </Typography>
                            </Typography>
                        </SubInfoCotainer>
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
