export type LoginResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token?: string;
    requestStatus?: "PENDING" | undefined;
};

export type LogoutResponse = {
    result: string;
};

export type LoginRequest = {
    username: string;
    password: string;
};