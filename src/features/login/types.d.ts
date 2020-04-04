declare module 'GlobalTypes' {
    export type UserModel = {
        id: string,
        name: string,
        email: string
    };
    export type LoginModel = {
        username: string,
        password: string
    }
    export type ResetPasswordModel = {
        email: string
    }
}