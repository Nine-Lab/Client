import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";

const CarouselContainer = styled("div")`
    width: 100%;
    display: flex;
    align-items: center;
    display: flex;
    /* justify-content: ; */
    /* position: relative; */
`;

const InfoContainer = styled("div")`
    width: 20%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 100px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-align: center;
`;

const MapContainer = styled("div")`
    width: 70%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 100px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
};
const Hood = () => {
    return (
        <CarouselContainer>
            <InfoContainer>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ paddingTop: "3rem" }}
                >
                    미세먼지 순위
                </Typography>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="강남구" secondary="수치 : 89" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="성동구" secondary="수치 : 59" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="NewYork" secondary="수치 : 39" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="중랑구" secondary="수치 : 29" />
                    </ListItem>
                </List>
            </InfoContainer>
            <MapContainer>
                <Box sx={{ maxWidth: 120, marginLeft: "auto" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            분류
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="미세먼지"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>미세먼지</MenuItem>
                            <MenuItem value={20}>침수</MenuItem>
                            <MenuItem value={30}>주거만족도</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <img
                    src="https://o.quizlet.com/eQhzxacEbGo.4lPgJgz4DQ_b.png"
                    alt=""
                    width={400}
                    height={300}
                />
            </MapContainer>
        </CarouselContainer>
    );
};

export default Hood;
