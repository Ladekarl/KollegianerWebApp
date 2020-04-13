declare module 'GlobalTypes' {
    export type UserModel = {
        id: string;
        name: string;
        email: string;
    };
    export type LoginModel = {
        username: string;
        password: string;
    };
    export type EmailModel = {
        email: string;
    };
    export type ActionCodeModel = {
        actionCode: string;
    };
    export type ConfirmPasswordResetModel = {
        email: string;
        actionCode: string;
        newPassword: string;
    };
}
