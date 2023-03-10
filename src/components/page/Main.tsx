import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  margin-top: 70px;
  margin-bottom: 60px;
  position : center;
`;

const Box = styled.div`
  margin-top: 25px;
  margin-bottom: 700px; 
`;
const Box1 = styled.div`
  font-size: 15px;
  display: inlin-block;
  border-radius: 15px;
  border: 2px solid;
  border-color : #5DA7DB;
  background-color : white;
  width: 300px;
  height : 470px;
`;

const SmallBox1 = styled.div`
display: inlin-block;
color: white;
font-size: 18px;
border-radius: 15px;
border: 2px solid;
background-color : #81C6E8;
padding: 6px;
margin: 5px 5px;
margin-top: 4px;
width: 130px;
height : 100;
`;

const Box2 = styled.div`
  font-size: 15px;
  display: inlin-block;
  border-radius: 15px;
  border: 2px solid;
  border-color : #5DA7DB;
  background-color : white;
  margin: -469px 400px;
  width: 300px;
  height : 470px;
`;

const SmallBox2 = styled.div`
display: inlin-block;
color: white;
font-size: 18px;
border-radius: 15px;
border: 2px solid;
background-color : #81C6E8;
padding: 6px;
margin: 5px 5px;
margin-top: 4px;
width: 130px;
height : 100;
`;

const Box3 = styled.div`
  font-size: 15px;
  display: inlin-block;
  border-radius: 15px;
  border: 2px solid;
  border-color : #5DA7DB;
  background-color : white;
  margin: -469px 800px;
  width: 300px;
  height : 470px;
`;

const SmallBox3 = styled.div`
display: inlin-block;
color: white;
font-size: 18px;
border-radius: 15px;
border: 2px solid;
background-color : #81C6E8;
padding: 6px;
margin: 5px 5px;
margin-top: 4px;
width: 130px;
height : 100;
`;

const Main = () => {
  return <div>
    <Title>미세먼지, 침수 데이터</Title>
    <Box>
      <Box1>
        <SmallBox1>
          미세먼지 농도
        </SmallBox1>
      </Box1>
      <Box2>
        <SmallBox2>
          위험 정도 1
        </SmallBox2>
      </Box2>
      <Box3>
        <SmallBox3>
          위험 정도 2
        </SmallBox3>
      </Box3>
      
    </Box>
  </div>;
};

export default Main;
