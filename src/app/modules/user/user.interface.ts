
// import { USER_ROLE } from "./user.constant";

import { USER_ROLE } from "./user.constant";


export type TUser = {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    isBlocked: boolean;
};

export type TUserRole = keyof typeof USER_ROLE ;