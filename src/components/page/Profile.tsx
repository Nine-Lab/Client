import React from "react";
import styled from "@emotion/styled";
import Info from "../user/Info";
import Leave from "../user/Leave";

function MyPage() {
    return (
        <MyPageWrapper>
        <MyPageContent>
            <Name>My Page</Name>
            <ButtonWrapper>
                <Info />
                <Leave />
            </ButtonWrapper>
        </MyPageContent>
        </MyPageWrapper>
    );
}

export default MyPage;

const MyPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const MyPageContent = styled.div`
display: flex;
flex-direction: column;
width: 900px;
height: 600px;
/* border: 2px solid #ccc;
background-color: #fff; */
padding: 300px;
padding: 0px 300px 300px 300px;
`;

const Name = styled.span`
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ccc;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    & > * {
        margin: 0 40px;
        flex-basis: 40%;
    }
`;