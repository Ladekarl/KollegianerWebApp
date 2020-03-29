declare module 'GlobalTypes' {
    export type UserModel = {
        id: string,
        name: string,
        email: string,
        token: string
    };
    export type LoginModel = {
        username: string,
        password: string,
        rememberMe: boolean
    }
}