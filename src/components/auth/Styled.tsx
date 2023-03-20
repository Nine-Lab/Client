// 추가
import styled from 'styled-components';

/* 모달 안 회색창 */
export const page = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F7F7F7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

/* 로그인 글 */
export const titleWrap = styled.div`
    text-align: center;
    margin-top: 87px;
    font-size: 26px;
    font-weight: bold;
    color: #262626;
`;
export const contentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;
/* 이메일주소, 비밀번호 글자 */
export const inputTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`;
/* input 창 2개 */
export const inputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid #e2e0e0;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
`;

/* 확인 버튼 */
export const bottomButton = styled.button`
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

/* 에러 문구 */
export const errorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`;

export const LoginForm = styled.form`
  width: 400px;
`;