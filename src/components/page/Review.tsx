import React, {useState, useCallback} from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as S from "../auth/Styled";
import Modal from '../auth/Modal';

import ErrorBoundary from "../common/ErrorBoundary";
import Error from "../common/Error";

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
    height: calc(100vh - 100px);
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
    height: calc(100vh - 100px);
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
    background-color: #81C6E8;
    box-shadow: 0px 5px 13px rgb(0 0 0 / 16%);
    font-weight: bold;
    color: white;

    &:active{
        background-color: #5DA7DB;
    }
`

//  샘플 레이아웃
const Review = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const onClickToggleModal = useCallback(() => {
        setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    // 유저 입력 값을 넣을 변수
    const [checkItemContent, setCheckItemContent] = useState('');
  // 줄 수를 계산해서 저장할 변수
  const [textareaHeight, setTextareaHeight] = useState(0);

  // 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
  // 엔터('\n') 개수를 세서 textareaHeight에 저장
  const checkItemChangeHandler = (event: any) => {
      setTextareaHeight(event.target.value.split('\n').length - 1);
      setCheckItemContent(event.target.value);
  }

    return (
        <ErrorBoundary fallback={Error}>
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
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="정연준"
                            secondary="오늘, 강남구"
                        />
                        Good &nbsp; <CheckCircleIcon color="primary" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/3.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="김진희"
                            secondary="5일전, 성동구"
                        />
                        Bad &nbsp; <CheckCircleIcon sx={{ color: "red" }} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="박준헌"
                            secondary="13일전, 강서구"
                        />
                        Normal &nbsp;{" "}
                        <CheckCircleIcon sx={{ color: "green" }} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/7.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="안소영"
                            secondary="15일전, 강서구"
                        />
                        Normal &nbsp;{" "}
                        <CheckCircleIcon sx={{ color: "green" }} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/4.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="한다희"
                            secondary="16일전, 광진구"
                        />
                        Bad &nbsp; <CheckCircleIcon sx={{ color: "red" }} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://mui.com/static/images/avatar/6.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="허지환"
                            secondary="23일전, 중랑구"
                        />
                        Good &nbsp; <CheckCircleIcon color="primary" />
                    </ListItem>
                </List>
                <Stack spacing={2}>
                    <Pagination count={5} color="primary" />
                </Stack>
                <div>
                {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                    <S.page>
                        <S.title>구 이름</S.title>
                        <S.reviewInputWrap>
                            <S.reviewInput type='text' required placeholder="구 이름을 입력하세요"></S.reviewInput>
                        </S.reviewInputWrap>
                        <S.title>동 이름</S.title>
                        <S.reviewInputWrap>
                            <S.reviewInput type='text' required placeholder="동 이름을 입력하세요"></S.reviewInput>
                        </S.reviewInputWrap>
                        <S.title>제목</S.title>
                        <S.reviewInputWrap>
                            <S.reviewInput type='text' required placeholder="제목을 입력하세요"></S.reviewInput>
                        </S.reviewInputWrap>
                        <S.title>댓글</S.title>
                        <S.reviewContentWrap>
                            <S.reviewContent required value={checkItemContent} placeholder={'내용을 입력해주세요'}onChange={checkItemChangeHandler}
        style={{height: ((textareaHeight + 1) * 27) + 'px'}}/>
                        </S.reviewContentWrap>
                        <div>
                            <S.reviewButton>리뷰 업로드</S.reviewButton>
                        </div>
                    </S.page>
                </Modal>
            )}
                </div>
                <Comment onClick={onClickToggleModal}>리뷰 남기기</Comment>
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
        </ErrorBoundary>
        
    );
};
export default Review;
