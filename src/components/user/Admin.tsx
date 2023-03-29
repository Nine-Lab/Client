import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Info from "components/page/Info";
// import Leave from "components/page/Leave";

const ButtonDiv = styled.div`
  border: 1px solid;
  text-align: center;
  width: 90%;
  height: 3em;
  line-height: 3em;
  font-size: 2em;
  margin: 1em auto;
  border-radius: 5px;
`;

const Admin = () => {
    return (
        <div className="main-noSide">
      {/* <Link to="/info"> */}
        <ButtonDiv>개인 정보 수정</ButtonDiv>
      {/* </Link> */}
      {/* <Link to="/leave"> */}
        <ButtonDiv>탈퇴하기</ButtonDiv>
      {/* </Link> */}
    </div>
        
);
  };
  
  export default Admin;
  