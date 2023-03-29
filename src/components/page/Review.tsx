import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as S from "../auth/Styled";
import ReviewModal from "../review/ReviewModal";
import Posts from "../review/Posts";
import SimpleMap from "components/map/Map";
import seoulMap from "../../api/data/seoul.json";
r;
import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";
import { BackGroundContainer } from "./Main";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
    overflow-y: scroll;
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
    margin-top: 5px;
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

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

//  샘플 레이아웃
const Review = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    // 줄 수를 계산해서 저장할 변수
    const [textareaHeight, setTextareaHeight] = useState(0);
    // 유저 입력 값을 넣을 변수
    // 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
    // 엔터('\n') 개수를 세서 textareaHeight에 저장

    const [userId, setUserId] = useState<string>("");
    const [guId, setGuId] = useState<string>("");
    const [dongId, setDongId] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [satisfactionLevel, setSatisfactionLevel] = useState<string>("");
    const guIdRef = useRef<HTMLInputElement>(null);
    const dongIdRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const contentsRef = useRef<HTMLInputElement>(null);

    const [isGuIdVaild, setIsGuIdVaild] = useState<boolean>(false);
    const [isDongIdVaild, setIsDongIdVaild] = useState<boolean>(false);
    const [isTitleVaild, setIsTitleVaild] = useState<boolean>(false);
    const [isContentVaild, setIsContentVaild] = useState<boolean>(false);

    const InvaildMessages = {
        guId: "2-6글자 한글로 입력해주세요!",
        dongId: "2-6글자 한글로 입력해주세요!",
        title: "최소 2글자 이상 입력해주세요!",
    };

    interface DecodedToken {
        userId: string;
    }

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

    // const checkItemChangeHandler = (event: any) => {
    //     setTextareaHeight(event.target.value.split("\n").length - 1);
    //     setContents(event.target.value);
    // };
    const checkContent = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const ContentRegex = /[a-zA-Zㄱ-ㅎ가-힣]{2,6}/;
            setContent(e.target.value);
            setIsContentVaild(ContentRegex.test(e.target.value));
        },
        [],
    );

    // 리뷰 제목 유효성 검사
    const checkTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const titleRegex = /[a-zA-Zㄱ-ㅎ가-힣]{2,6}/;
        setTitle(e.target.value);
        setIsTitleVaild(titleRegex.test(e.target.value));
    }, []);

    const getUserId = () => {
        const token = Cookies.get("token"); // 쿠키에서 토큰을 검색
        if (token) {
            //토큰이 발견되면 토큰을 디코딩하고 userId를 추출
            const decoded: DecodedToken = jwt_decode(token);
            const { userId } = decoded;
            return userId;
        }
        return null; // 토큰을 찾을 수 없으면 null을 반환
    };

    const ReviewAPI = useCallback(async () => {
        try {
            const userId = getUserId();
            const response = await axios.post(
                "https://server-git-dev-server-nine-lab.vercel.app/api/reviews",
                { userId, guId, dongId, title, content, satisfactionLevel },
                { headers: { "Content-Type": "application/json" } },
            );
            setOpenModal(false);
            alert("리뷰가 성공적으로 등록되었습니다!");
        } catch (err) {
            console.log(err);
            alert("로그인이 필요한 서비스입니다!");
        }
        console.log(userId);
    }, [userId, guId, dongId, title, content, satisfactionLevel]);

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
            });
    }, []);

    console.log(posts);

    // 지도 관련
    const [value, setValue] = React.useState(0);
    const [currentState, setCurrentState] = useState({
        map: seoulMap,
        center: [126.986, 37.561],
    });

    return (
        <ErrorBoundary fallback={Error}>
            <BackGroundContainer>
                <CarouselContainer>
                    <InfoContainer>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ paddingTop: "2rem" }}
                        >
                            현지 리뷰
                        </Typography>
                        <Posts posts={posts} loading={loading} />
                        <div>
                            {isOpenModal && (
                                <ReviewModal
                                    onClickToggleModal={onClickToggleModal}
                                >
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
                                                <S.reviewInput
                                                    type="text"
                                                    required
                                                    value={content}
                                                    onChange={checkContent}
                                                    ref={contentsRef}
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
                                            <div>
                                                <S.reviewButton>
                                                    리뷰 업로드
                                                </S.reviewButton>
                                            </div>
                                        </S.page>
                                    </form>
                                </ReviewModal>
                            )}
                        </div>
                        <Comment onClick={onClickToggleModal}>
                            리뷰 남기기
                        </Comment>
                    </InfoContainer>

                    <MapContainer>
                        <TabPanel value={value} index={0}>
                            <SimpleMap currentState={currentState} />
                        </TabPanel>
                    </MapContainer>
                </CarouselContainer>
            </BackGroundContainer>
        </ErrorBoundary>
    );
};
export default Review;
