import axios from "axios";

axios.defaults.baseURL = "https://server-git-dev-server-nine-lab.vercel.app";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 3000; //ms, 백엔드에 요청하고 3초 기다린다. 그 이후엔 에러발생

export const api = axios.create({}) //axios 인스턴스화

api.interceptors.request.use(
    req => {
        return req;
    },
    err => {
        console.log({ err });
    },
);

// Server =====> Intercenter ====> Client

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