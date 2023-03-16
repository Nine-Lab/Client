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
    padding-top: 40px;
    margin-bottom: 20px;
    font-size: 250%;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`

const GraphImage = styled.div`
    margin-top: 20px;
    margin-left: 380px;
    width: 40vw;
    height: 500px;
    background-color: #80838C;
`

const MainSlide1 = () => {
    return (
    <Container>
        <Title>
            서울살이 얼마나 만족하시나요?
        </Title>
        <GraphImage />
    </Container>
    )
};

export default MainSlide1;
