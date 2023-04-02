import React from "react";
import styled from "styled-components";
import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";
import { useState, useCallback } from "react";
import Modal from "../auth/Modal";
import * as S from "../auth/Styled";
import Cookies from "js-cookie";

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
    margin-top: 200px;
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

const DialogButton = styled.button`
    width: 160px;
    height: 48px;
    color: black;
    background-color: white;
    font-size: 1.4rem;
    font-weight: 400;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    margin: 10px 400px;

    &:hover {
        transform: translateY(-1px);
    }
`;

export const MEMBER_TYPE = {
    VISITOR: "Visitor",
    MEMBER: "Member",
    ADMIN: "Admin",
};

export default function Leave() {
    //모달
    const [isOpenModal, setOpenModal] = useState<boolean>(false);

    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    // //API

    // const [email, setEmail] = useState<string>("");
    //   const [password, setPassword] = useState<string>("");

    //   //****** 로그인 API
    //   const loginAPI = useCallback(async (email: string, password: string) => {
    //       try {
    //           console.log("성공");
    //           const response = await axios.post(
    //               "https://shiny-shea-devhwann.koyeb.app/api/users/login",
    //               { email, password },
    //           );
    //           const { token } = response.data;
    //           Cookies.set("token", token, { httpOnly: true });
    //           setOpenModal(false);
    //       } catch (err) {
    //           console.log("실패");
    //           alert("이메일 또는 비밀번호를 확인해주세요.");
    //       }
    //   }, []);

    // const useConfirm = ( message = null, onConfirm, onCancel) => {
    //   if (!onConfirm || typeof onConfirm !== 'function') {
    //     return;
    //   }
    //   if (onCancel && typeof onCancel !== 'function') {
    //     return;
    //   }

    //   const confirmAction = () => {
    //     if (window.confirm(message)) {
    //       onConfirm();
    //     } else {
    //       onCancel();
    //     }
    //   };

    //   return confirmAction;
    // };
    // const deleteConfirm = async () => {
    //   const userRepo = Repositories[RepositoryNames.USER];
    //   const userToken = localStorage.getItem('userToken');
    //   await userRepo.deleteUser(userToken);
    //   // setIsLogin(false);
    //   setMode(MEMBER_TYPE.VISITOR);
    //   localStorage.clear();

    //   window.alert('완료!');
    //   window.location.href = ' / ';
    // };
    // const cancelConfirm = () => {
    //   history.back();
    // };
    // const confirmDelete = useConfirm(
    //   '정말 탈퇴하시겠습니까?',
    //   deleteConfirm,
    //   cancelConfirm,
    // );

    return (
        <ErrorBoundary fallback={Error}>
            {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <form>
                        <S.page>
                            <S.contentWrap>
                                {/* <S.P>✓ 탈퇴시 고객 정보가 삭제되며 상품권 구매 내역 확인, 이벤트 참여가
          불가합니다.</S.P>
          <S.P>✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</S.P>
          <S.P>✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다.(다른 아이디로
          가입)</S.P> */}
                            </S.contentWrap>
                            <S.bottomButton onClick={onClickToggleModal}>
                                탈퇴하기
                            </S.bottomButton>
                        </S.page>
                    </form>
                </Modal>
            )}
            <DialogButton onClick={onClickToggleModal}>
                <img
                    src="../../Leave_logo.png"
                    alt="asd"
                    width={400}
                    height={300}
                />
            </DialogButton>
        </ErrorBoundary>
    );
}
