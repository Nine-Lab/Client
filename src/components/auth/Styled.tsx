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

/* 로그인,회원가입 타이틀 텍스트 */
export const titleWrap = styled.div`
    text-align: center;
    margin-top: 87px;
    font-size: 26px;
    font-weight: bold;
    color: #262626;
`;

/* 리뷰 타이틀 */
export const title = styled.div`
  text-align: left;
  margin-top: 70px;
  font-size: 18px;
  font-weight: bold;
  color: #262626;
`;

export const contentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`;
/* 이메일주소, 비밀번호 글자 */
export const inputTitle = styled.div`
  text-align: left;
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

/* 리뷰 모달용 */
export const reviewInputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  right: 10px;
  margin-left: 100px;
  margin-top: -36px;
  background-color: white;
  border: 1px solid #e2e0e0;
`

/* 리뷰 모달용 인풋 양식 */
export const reviewInput = styled(Input)`
  font-family: 'Roboto', sans-serif;
`;

/* 리뷰 내용 양식 */
export const reviewContent = styled.textarea`
  width: 100%;
  height: 500px;
  outline: none;
  border: 1px black;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
    /* padding: 5px 0; */
  resize: none;
  border: 1px;
  font-family: 'Roboto', sans-serif;
`;
export const reviewContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  height: 150px;
  right: 10px;
  margin-left: 100px;
  margin-top: -33px;
  background-color: white;
  border: 1px solid #e2e0e0;    
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
export const headerButton = styled.button`
  height: 48px;
  border: none;
  font-weight: bold;
  background-color: #81c6e8;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;
`;


/* 리뷰 생성 버튼 */
export const reviewButton  = styled.button`
  width: 70%;
  height: 48px;
  border: none;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 64px;
  background-color: #81c6e8;
  color: white;
  position: absolute;
  bottom: 0;
  left: 70px;
  cursor: pointer;

  &:active{
        background-color: #5DA7DB;
  }
`

/* 에러 문구 */
export const errorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`;

export const LoginForm = styled.form`
  width: 400px;
`;

export const reviewErrorWrap = styled.div`
  padding-top: 5px;
  margin-left: -100px;
  color: #ef0000;
  font-size: 12px;
`

/* 안내 문구 */
export const satisfactionLevelGuide = styled.div`
  padding-top: 5px;
  font-size: 12px;
`