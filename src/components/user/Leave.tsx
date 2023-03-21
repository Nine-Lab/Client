import React from "react";
import styled from "styled-components";

import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";

export const Title = styled.div`
  text-align: center;
  margin-top: 87px;
  font-size: 26px;
  font-weight: bold;
  color: #262626;
`;
export const P = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`;
const Box = styled.button`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: #81c6e8;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const Page = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  width: 100%;
  max-width: 500px;
  padding: 0 50px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #f7f7f7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* border: 2px solid #000 */
`;

export default function SignUp() {
  return (
    <ErrorBoundary fallback={Error}>
    <Box>
      <Page>
        <Title style={{ marginTop: "10%" }}>회원탈퇴</Title>
        <P style={{ marginTop: "10%" }}>
          ✓ 탈퇴시 고객 정보가 삭제되며 상품권 구매 내역 확인, 이벤트 참여가
          불가합니다.
        </P>
        <P style={{ marginTop: "10%" }}>
          ✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.
        </P>
        <P style={{ marginTop: "10%" }}>
          ✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다.(다른 아이디로
          가입)
        </P>

        <div>
          <Button style={{ marginTop: "70%" }}>탈퇴하기</Button>
        </div>
      </Page>
    </Box>
    </ErrorBoundary>
  );
}
