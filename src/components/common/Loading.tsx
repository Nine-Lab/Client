import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const LoadingWrap = styled("div")`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const LoadingText = styled("div")`
    color: #fff;
    text-align: center;
`;

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
};

const Loading = () => {
    let [loading, setLoading] = useState(true);

    return (
        <LoadingWrap>
            <CircleLoader
                color="white"
                loading={loading}
                cssOverride={override}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <LoadingText>
                <Typography variant="h4" sx={{ paddingTop: "3rem" }}>
                    페이지 이동 중...
                </Typography>
            </LoadingText>
        </LoadingWrap>
    );
};
export default Loading;
