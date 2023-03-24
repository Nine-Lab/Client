import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ChartCotainer from "../chart/ChartData2";

const CarouselContainer = styled("div")`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: calc(100vh - 250px);
`;

const SubInfoContainer = styled("div")`
    /* display: flex; */
    /* position: absolute; */
`;

const CarouselSection3 = () => {
    return (
        <CarouselContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
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
                            sx={{ marginBottom: "1rem" }}
                        >
                            서울, <br />
                            침수예방 어때?
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ marginBottom: "5rem" }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ marginBottom: "2rem" }}
                            >
                                예기치 못한 침수는 소중한 삶의 터전을 잃을 수
                                있습니다.
                            </Typography>
                        </Typography>
                        <SubInfoContainer>
                            <Typography variant="subtitle1" gutterBottom>
                                침수는 자연재해로 건물이나 도로, 지반이 물에 잠기는 것을 말합니다.
                                <br />
                                해일, 쓰나미 등으로 육지가 물에 잠기는 것도 이에 해당합니다.
                                <br />
                                상기한 재난으로 지반이 침하되어 영구적으로 가라앉기도 합니다.
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

export default CarouselSection3;
