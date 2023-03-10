import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.div`
    text-align: center;
    padding-top: 50px;
    font-size: 300%;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`

const GraphImage = styled.div`
    margin-top: 50px;
    margin-left: 190px;
    width: 40vw;
    height: 500px;
    background-color: #80838C;
`

const MainSlide3 = () => {
    return (
    <Container>
        <Title>
            서울살이<br />
        얼마나 만족하시나요?
        </Title>
        <GraphImage />
    </Container>
    )
};

export default MainSlide3;
