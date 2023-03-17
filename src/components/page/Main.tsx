import React from "react";
import styled from "styled-components";
import MainCarousel from "components/carousel/MainCarousel";

import {ErrorBoundary} from 'react-error-boundary'

const BackGroundContainer = styled("div")`
  width: 100%;
  display: flex;
  height: calc(100vh);
  background: #2980b9;
  background: -webkit-linear-gradient(to top, #ffffff, #6dd5fa, #2980b9);
  background: linear-gradient(to top, #ffffff, #6dd5fa, #2980b9);
`;

const CarouselContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
`;

const CardContainer = styled("div")`
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - 250px);
  background-color: white;
  /* box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
  border-radius: 7px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); */
`;

const ErrorFallback = () => {
  return (<h1>렌더링 할 수 없습니다!</h1>)
}

const Main = () => {
  return (
    
      <BackGroundContainer>
        <CarouselContainer>
          <CardContainer>
              <ErrorBoundary FallbackComponent={ErrorFallback}>        
                <MainCarousel />
              </ErrorBoundary>        
          </CardContainer>
        </CarouselContainer>
      </BackGroundContainer>
    
    
  );
};

export default Main;

