import { DustList } from "components/rank/DustList";
import React, { FC, Fragment } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

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
    overflow-y: scroll;
`;

const TabOne: FC<{}> = () => {
    return (
        <Fragment>
            <InfoContainer>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ paddingTop: "3rem" }}
                >
                    미세먼지 순위
                </Typography>
                <DustList />
            </InfoContainer>
        </Fragment>
    );
};
export default TabOne;
