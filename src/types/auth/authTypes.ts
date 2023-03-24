export interface AuthFormInitialType {
    email: string;
    nickname?: string;
    password: string;
    confirmPassword?: string;
}

export interface EditFormInitialType {
    description: string;
    nickname: string;
}

export interface UserInfoType {
    description: string;
    nickname: string;
}

export interface PsEditFormInitialType {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
