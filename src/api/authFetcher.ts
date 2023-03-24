import customAxios from "../util/customAxios";
import Storage from "../storage/storage";
import CookieStorage from "../storage/cookie";
import { AuthFormInitialType } from "../types/auth/authTypes";

export async function authRegisterRequest(
    endPoint: string,
    { email, nickname, password }: AuthFormInitialType,
) {
    const res = await customAxios.post(
        endPoint,
        {
            email: email,
            nickname: nickname,
            password: password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
    const { success } = res.data;
    return success;
}

export async function authLoginRequest(
    endPoint: string,
    { email, password }: AuthFormInitialType,
) {
    const res = await customAxios.post(
        endPoint,
        {
            email: email,
            password: password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
    const { datas } = res.data;
    Storage.setToken(datas.accessToken);
    CookieStorage.setToken(datas.refreshToken);
    return datas;
}

export async function checkDuplicationRequest(
    endPoint: string,
    checkData: string,
) {
    const res = await customAxios.get(endPoint + `/${checkData}`);
    return res.data.message;
}

export async function authProfileImageUpdate(
    endPoint: string,
    image: Blob,
): Promise<string> {
    const formData = new FormData();
    formData.append("image", image);
    const res = await customAxios.put(endPoint, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Storage.getToken()}`,
        },
    });
    const { datas } = res.data;
    return datas;
}

export async function authProfileNickUpdate(
    endPoint: string,
    nickname: string,
) {
    const res = await customAxios.put(
        endPoint,
        {
            newNickname: nickname,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Storage.getToken()}`,
            },
        },
    );
    return res.data.datas;
}

export async function authProfileDescriptionUpdate(
    endPoint: string,
    description: string,
) {
    const res = await customAxios.put(
        endPoint,
        {
            newDescription: description,
        },
        {
            headers: {
                Authorization: `Bearer ${Storage.getToken()}`,
            },
        },
    );
    return res.data.datas;
}

export async function authProfilePasswordUpdate(
    endPoint: string,
    currentPassword: string,
    newPassword: string,
) {
    const res = await customAxios.put(
        endPoint,
        {
            currentPassword: currentPassword,
            newPassword: newPassword,
        },
        {
            headers: {
                Authorization: `Bearer ${Storage.getToken()}`,
            },
        },
    );
    return res.data;
}

export async function getAuthInformationById(endPoint: string, id: string) {
    const res = await customAxios.get(`${endPoint}/${id}`, {
        headers: {
            Authorization: `Bearer ${Storage.getToken()}`,
        },
    });
    const { datas } = res.data;
    return datas;
}

export async function authVerificationCodeSend(
    endPoint: string,
    email: string,
) {
    const res = await customAxios.post(endPoint, {
        email: email,
    });
    return res.data;
}

export async function authVerificationCodeCheck(
    endPoint: string,
    email: string,
    authCode: string,
) {
    const res = await customAxios.delete(endPoint, {
        data: {
            email: email,
            authCode: authCode,
        },
    });
    return res.data;
}

export async function deleteAccountRequest(endPoint: string) {
    const res = await customAxios.delete(endPoint, {
        headers: {
            Authorization: `Bearer ${Storage.getToken()}`,
        },
    });
    return res.data;
}

export async function authFollowingRequest(endPoint: string, targetId: string) {
    const res = await customAxios.get(`${endPoint}/${targetId}`, {
        headers: {
            Authorization: `Bearer ${Storage.getToken()}`,
        },
    });
    return res.data;
}

export async function authFollowRequest(endPoint: string, targetId: string) {
    const res = await customAxios.post(
        endPoint,
        {
            targetId: targetId,
        },
        {
            headers: {
                Authorization: `Bearer ${Storage.getToken()}`,
            },
        },
    );
    return res;
}

export async function authUnFollowRequest(endPoint: string, targetId: string) {
    const bodyData = JSON.stringify({ targetId });
    const res = await customAxios.delete(endPoint, {
        data: bodyData,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Storage.getToken()}`,
        },
    });
    return res;
}
