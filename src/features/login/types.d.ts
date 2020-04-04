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
    export type ResetPasswordModel = {
        email: string;
    };
    export type VerifyPasswordResetCodeModel = {
        actionCode: string;
    };
    export type ConfirmPasswordResetModel = {
        email: string;
        actionCode: string;
        newPassword: string;
    };
    export type RevokeEmailChangeModel = {
        actionCode: string;
    };
    export type VerifyEmailModel = {
        ationCode: string;
    };
}
