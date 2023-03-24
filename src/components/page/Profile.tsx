import React from "react";
import styled from "styled-components";
import Leave from "components/user/Leave";
import Info from "components/user/Info";

const Title = styled.h1`
  font-size: 40px;
  margin-top: 70px;
  position : center;
  margin: 100px;
`;

const Box1 = styled.h2`
    margin-top: -900px;
  font-size: 20px;
  margin: -36px 100px;
`;

const Box2 = styled.div`
  font-size: 15px;
  margin: 70px 100px;
`;

const LogoBox1 = styled.img`
  width: 50%;
  display: inline-block;
  background-image: url(../assets/images/개인정보 관리 버튼.png);
  background-repeat: no-repeat;
  background-size: 70%;
  margin: 70px 100px;
`;
const LogoBox2 = styled.img`
  width: 50%;
  display: inline-block;
  background-image: url(../assets/images/회원탈퇴.png);
  background-repeat: no-repeat;
  background-size: 70%;
  margin: 70px 100px;
`;

const Profile = () => {
  
    return (
        <div className="main-noSide">
          <Title>마이페이지</Title>
          <hr></hr>
          <Box1>My Page</Box1>
          <Box2>안녕하세요. 김00님</Box2>
          <React.Fragment>
            <Leave />
            <Info />  
          </React.Fragment>
          {/* <div className="LogoBox1">
            <LogoBox1></LogoBox1>{<img src="./assets/images/개인정보 관리 버튼.png" alt="개인정보 관리 로고" />}<LogoBox1></LogoBox1>
            </div>
            <div className="LogoBox2">
            <LogoBox2>{<img src="../assets/images/회원 탈퇴.png" alt="회원 탈퇴 로고" />}</LogoBox2>
            </div> */}
        </div>
      );
}

export default Profile;