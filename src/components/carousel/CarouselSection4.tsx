import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ChartCotainer from "../chart/chartData3";

const CarouselContainer = styled("div")`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: calc(100vh - 250px);
`;

const CarouselSection4 = () => {
    return (
        <CarouselContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid
                        xs={7}
                        sx={{
                            // height: "450px",
                            width: "80%",
                            margin: "auto",
                        }}
                    >
                        {/* <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                            생활 만족도 데이터로 살펴보는
                        </Typography> */}
                        <Typography
                            align="left"
                            variant="h3"
                            gutterBottom
                            sx={{ margin: "20" }}
                        >
                            내가 살고픈 '서울 자치구'는?
                        </Typography>
                        <ChartCotainer />
                    </Grid>
                    {/* <Grid
                        xs={5}
                        sx={{
                            position: "absolute",
                            right: "1rem",
                            marginTop: "3rem",
                        }}
                    ></Grid> */}
                </Grid>
            </Box>
        </CarouselContainer>
    );
};

export default CarouselSection4;
