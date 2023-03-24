import axios, { AxiosError } from "axios";
import Storage from "../storage/storage";
import CookieStorage from "../storage/cookie";

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const customAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 3000,
});

customAxios.interceptors.request.use(
    req => {
        return req;
    },
    error => {
        throw new Error(`This is error! ${error}`);
    },
);

customAxios.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        if (error.response.status >= 400 && error.response.status < 500) {
            const { statusText, data } = error.response;
            const { neededBothToken } = data;
            if (statusText === "Unauthorized") {
                if (neededBothToken) {
                    Storage.clearToken();
                    CookieStorage.clearToken();
                    window.location.replace("/auth");
                }
                (async () => {
                    const res = await customAxios.post(
                        "/api/auth/refresh",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${Storage.getToken()}`,
                                "refresh-token": CookieStorage.getToken(),
                            },
                        },
                    );
                    const { datas } = res.data;
                    Storage.setToken(datas.newAccessToken);
                })();
            }
            return Promise.reject(error);
        } else if (error.response.status >= 500) {
            return AxiosError;
        }
    },
);

export default customAxios;
