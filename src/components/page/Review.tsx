import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as S from "../auth/Styled";
import Modal from "../auth/Modal";
import Posts from "../review/Posts";

import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";
import { BackGroundContainer } from "./Main";

const CarouselContainer = styled("div")`
    width: 100%;
    display: flex;
    align-items: center;
    display: flex;
    /* justify-content: ; */
    /* position: relative; */
`;

const InfoContainer = styled("div")`
    width: 20%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 150px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-align: center;
`;

const MapContainer = styled("div")`
    width: 70%;
    /* position: absolute; */
    margin: 0 auto;
    height: calc(100vh - 150px);
    background-color: white;
    box-shadow: 0 12px 13px rgb(0 0 0 / 16%), 0 12px 13px rgb(0 0 0 / 16%);
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Comment = styled.button`
    width: 40%;
    margin-top: 80px;
    height: 40px;
    border-color: black;
    border-radius: 7px;
    background-color: #81c6e8;
    box-shadow: 0px 5px 13px rgb(0 0 0 / 16%);
    font-weight: bold;
    color: white;

    &:active {
        background-color: #5da7db;
    }
`;

//  샘플 레이아웃
const Review = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    // 유저 입력 값을 넣을 변수
    const [checkItemContent, setCheckItemContent] = useState("");
    // 줄 수를 계산해서 저장할 변수
    const [textareaHeight, setTextareaHeight] = useState(0);

    // 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
    // 엔터('\n') 개수를 세서 textareaHeight에 저장
    const checkItemChangeHandler = (event: any) => {
        setTextareaHeight(event.target.value.split("\n").length - 1);
        setCheckItemContent(event.target.value);
    };

    const [userId, setUserId] = useState<string>("");
    const [guId, setGuId] = useState<string>("");
    const [dongId, setDongId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [contents, setContents] = useState<string>("");
    const [satisfactionLevel, setSatisfactionLevel] = useState<string>("");
    const guIdRef = useRef<HTMLInputElement>(null);
    const dongIdRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    const [isGuIdVaild, setIsGuIdVaild] = useState<boolean>(false);
    const [isDongIdVaild, setIsDongIdVaild] = useState<boolean>(false);
    const [isTitleVaild, setIsTitleVaild] = useState<boolean>(false);

    const InvaildMessages = {
        guId: "2-6글자 한글로 입력해주세요!",
        dongId: "2-6글자 한글로 입력해주세요!",
        title: "최소 2글자 이상 입력해주세요!",
    };

    const checkUserId = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setUserId(e.target.value);
        },
        [],
    );

    // 구 이름 유효성 검사
    const checkGuId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const guIdRegex = /[ㄱ-ㅎ가-힣]{2,6}/;
        setGuId(e.target.value);
        setIsGuIdVaild(guIdRegex.test(e.target.value));
    }, []);

    // 동 이름 유효성 검사
    const checkDongId = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const dongIdRegex = /[ㄱ-ㅎ가-힣0-9]{2,6}/;
            setDongId(e.target.value);
            setIsDongIdVaild(dongIdRegex.test(e.target.value));
        },
        [],
    );

    // 리뷰 제목 유효성 검사
    const checkTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const titleRegex = /[a-zA-Zㄱ-ㅎ가-힣]{2,6}/;
        setTitle(e.target.value);
        setIsTitleVaild(titleRegex.test(e.target.value));
    }, []);

    const ReviewAPI = useCallback(async () => {
        try {
            console.log("성공");
            const response = await axios.post(
                "https://server-git-dev-server-nine-lab.vercel.app/api/reviews",
                { userId, guId, dongId, title, contents, satisfactionLevel },
            );
            setOpenModal(false);
            alert("리뷰가 성공적으로 등록되었습니다!");
        } catch (err) {
            console.log(err);
            alert("정상적으로 등록되지 않았습니다!");
        }
    }, [userId, guId, dongId, title, contents, satisfactionLevel]);

    const reviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ReviewAPI();
    };

    // 리뷰 페이지네이션
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://server-git-dev-server-nine-lab.vercel.app/api/review")
            .then(res => {
                setPosts(res.data);
                setLoading(false);
                alert("불러오기 성공");
            });
    }, []);

    console.log(posts);

    return (
        <ErrorBoundary fallback={Error}>
            <BackGroundContainer>
                <CarouselContainer>
                    <InfoContainer>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ paddingTop: "3rem" }}
                        >
                            현지 리뷰
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            용산구
                        </Typography>
                        <Posts posts={posts} loading={loading} />
                        <div>
                            {isOpenModal && (
                                <Modal onClickToggleModal={onClickToggleModal}>
                                    <form onSubmit={reviewSubmit}>
                                        <S.page>
                                            <S.title>구 이름</S.title>
                                            <S.reviewInputWrap>
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    value={guId}
                                                    onChange={checkGuId}
                                                    ref={guIdRef}
                                                    placeholder="구 이름을 입력하세요"
                                                />
                                            </S.reviewInputWrap>
                                            <S.reviewErrorWrap>
                                                {guId
                                                    ? isGuIdVaild || (
                                                          <div>
                                                              {
                                                                  InvaildMessages.guId
                                                              }
                                                          </div>
                                                      )
                                                    : null}
                                            </S.reviewErrorWrap>
                                            <S.title>동 이름</S.title>
                                            <S.reviewInputWrap>
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    value={dongId}
                                                    onChange={checkDongId}
                                                    ref={dongIdRef}
                                                    placeholder="동 이름을 입력하세요"
                                                />
                                            </S.reviewInputWrap>
                                            <S.reviewErrorWrap>
                                                {dongId
                                                    ? isDongIdVaild || (
                                                          <div>
                                                              {
                                                                  InvaildMessages.dongId
                                                              }
                                                          </div>
                                                      )
                                                    : null}
                                            </S.reviewErrorWrap>
                                            <S.title>제목</S.title>
                                            <S.reviewInputWrap>
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    value={title}
                                                    onChange={checkTitle}
                                                    ref={titleRef}
                                                    placeholder="제목을 입력하세요"
                                                />
                                            </S.reviewInputWrap>
                                            <S.reviewErrorWrap>
                                                {title
                                                    ? isTitleVaild || (
                                                          <div>
                                                              {
                                                                  InvaildMessages.title
                                                              }
                                                          </div>
                                                      )
                                                    : null}
                                            </S.reviewErrorWrap>
                                            <S.title>댓글</S.title>
                                            <S.reviewContentWrap>
                                                <S.reviewContent
                                                    required
                                                    value={checkItemContent}
                                                    placeholder={
                                                        "내용을 입력해주세요"
                                                    }
                                                    onChange={
                                                        checkItemChangeHandler
                                                    }
                                                    style={{
                                                        height:
                                                            (textareaHeight +
                                                                1) *
                                                                27 +
                                                            "px",
                                                    }}
                                                />
                                            </S.reviewContentWrap>
                                            <S.title>별점</S.title>
                                            <S.reviewInputWrap>
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    placeholder="별점을 입력하세요"
                                                />
                                            </S.reviewInputWrap>
                                            <S.satisfactionLevelGuide>
                                                <div>
                                                    ※매우 불만족: 1점, 조금
                                                    불만족: 2점, 보통: 3점, 조금
                                                    좋음: 4점, 매우 좋음: 5점
                                                </div>
                                            </S.satisfactionLevelGuide>
                                            <S.inputWrap>
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    value={userId}
                                                    onChange={checkUserId}
                                                />
                                            </S.inputWrap>
                                            <div>
                                                <S.reviewButton>
                                                    리뷰 업로드
                                                </S.reviewButton>
                                            </div>
                                        </S.page>
                                    </form>
                                </Modal>
                            )}
                        </div>
                        <Comment onClick={onClickToggleModal}>
                            리뷰 남기기
                        </Comment>
                    </InfoContainer>

                    <MapContainer>
                        <Box sx={{ maxWidth: 120, marginLeft: "auto" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    분류
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="미세먼지"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={10}>미세먼지</MenuItem>
                                    <MenuItem value={20}>침수</MenuItem>
                                    <MenuItem value={30}>주거만족도</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <img
                            src="../../pngegg.png"
                            alt="asd"
                            width={400}
                            height={300}
                        />
                    </MapContainer>
                </CarouselContainer>
            </BackGroundContainer>
        </ErrorBoundary>
    );
};
export default Review;
