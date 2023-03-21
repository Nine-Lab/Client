import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Info from "components/page/Info";
// import Leave from "components/page/Leave";
import Button from '@mui/material/Button';

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

const MyPage = () => {
    return (
        <div className="main-noSide">
        <ButtonDiv>
          <Button href="/info">
            개인정보수정
          </Button>
        </ButtonDiv>

        <ButtonDiv>
          <Button href="/leave">
            탈퇴하기
          </Button>
          </ButtonDiv>
      {/* </Link> */}
    </div>
        
);
  };
  
  export default MyPage;