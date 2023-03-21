//프엔 오피스아워 예제 코드 
import axios from "axios";

axios.defaults.baseURL = "https://server-git-dev-server-nine-lab.vercel.app";
axios.defaults.headers.post["Content-Type"] = "application/json"; // 요청 본문의 기본 내용 유형 지정
axios.defaults.timeout = 3000; //ms, 서버 응답을 기다리는 최대 시간 3초, 시간 내 응답이 없으면 오류 


//axios 인스턴스화, create() 메서드를 사용하여 axios 인스턴스 생성, 특정 구성을 설정하고 HTTP 요청을 만드는데 사용할 수 있음
export const api = axios.create({})

// 발신 요청을 수정하도록 하는 인터셉터 설정, 단순히 요청 객체를 그대로 반환, 오류 발생 시 콘솔에 오류 기록
api.interceptors.request.use(
    req => {
        return req;
    },
    err => {
        console.log({ err });
    },
);

// Server =====> Intercenter ====> Client

// 수신 응답을 수정하도록 인터셉터 설정, 응답 본문을 포함하는 응답 개체의 데이터 속성만 반혼, 오류 발생 시 콘솔에 오류 기록, 거부된 약속을 반환
api.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        //error에 대한 예외처리
        console.log(err);
        Promise.reject(err)
    }
)