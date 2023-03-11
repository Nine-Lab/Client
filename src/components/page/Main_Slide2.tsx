import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.div`
    text-align: center;
    padding-top: 100px;
    font-size: 250%;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`

const MapImage = styled.div`
    margin-top: 50px;
    margin-left: 200px;
    width: 40vw;
    height: 500px;
    background-color: #80838C;
`

const MainSlide2 = () => {
    return (
        <Container>
            <Title>
                서울시 자치구별 주거환경 정보 제공 서비스를 통해<br />
            다시 만나는 서울살이!
            </Title>
            <MapImage />
        </Container>
        )
}

export default MainSlide2