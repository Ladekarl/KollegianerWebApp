import {
    UserModel,
    LoginModel,
    ResetPasswordModel,
    ConfirmPasswordResetModel,
    RevokeEmailChangeModel,
    VerifyEmailModel,
    VerifyPasswordResetCodeModel,
} from 'GlobalTypes';
import firebase, { FacebookAuthProvider } from '../../firebase';
import { getPath } from '../../routes/routes';

const DOMAIN = process.env.REACT_APP_DOMAIN;

function getErrorMessageFromFirebaseErrorCode(errorCode: string): string {
    if (errorCode === 'auth/invalid-email') {
        return 'login.invalidEmail';
    } else if (errorCode === 'auth/user-disabled') {
        return 'login.userDisabled';
    } else if (errorCode === 'auth/user-not-found') {
        return 'login.userNotFound';
    } else if (errorCode === 'auth/wrong-password') {
        return 'login.wrongPassword';
    } else if (errorCode === 'auth/account-exists-with-different-credential') {
        return 'login.accountExistsWithDifferentCredential';
    } else if (errorCode === 'auth/auth-domain-config-required') {
        return 'login.authDomainConfigRequired';
    } else if (errorCode === 'auth/cancelled-popup-request') {
        return 'login.cancelledPopupRequest';
    } else if (errorCode === 'auth/operation-not-allowed') {
        return 'login.operationNotAllowed';
    } else if (errorCode === 'auth/operation-not-supported-in-this-environment') {
        return 'login.operationNotSupportedInThisEnvironment';
    } else if (errorCode === 'auth/popup-blocked') {
        return 'login.popupBlocked';
    } else if (errorCode === 'auth/popup-closed-by-user') {
        return 'login.popupClosedByUser';
    } else if (errorCode === 'auth/unauthorized-domainr') {
        return 'login.unauthorizedDomainNr';
    } else if (errorCode === 'auth/expired-action-code') {
        return 'login.expiredActionCode';
    } else if (errorCode === 'auth/invalid-action-code') {
        return 'login.invalidActionCode';
    } else if (errorCode === 'auth/weak-password') {
        return 'login.weakPassword';
    } else {
        return 'login.unknownError';
    }
}

export async function loginUser(login: LoginModel): Promise<UserModel> {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(login.username, login.password);
        const user = result.user;
        if (user != null) {
            return {
                id: user.uid,
                name: user.displayName || '',
                email: user.email || '',
            };
        } else {
            throw new Error('login.unknownError');
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function loginFacebook(): Promise<UserModel> {
    const provider = FacebookAuthProvider;
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        if (user != null) {
            return {
                id: user.uid,
                name: user.displayName || '',
                email: user.email || '',
            };
        } else {
            throw new Error('login.unknownError');
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function resetPassword(resetPasswordModel: ResetPasswordModel): Promise<boolean> {
    const actionCodeSettings = {
        url: DOMAIN + getPath('forgotPassword') + '?email=' + resetPasswordModel.email,
        handleCodeInApp: true,
    };
    try {
        await firebase.auth().sendPasswordResetEmail(resetPasswordModel.email, actionCodeSettings);
        return true;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function verifyPasswordResetCode(
    verifyPasswordResetCodeModel: VerifyPasswordResetCodeModel,
): Promise<ResetPasswordModel> {
    try {
        const email = await firebase.auth().verifyPasswordResetCode(verifyPasswordResetCodeModel.actionCode);
        return {
            email,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function confirmPasswordReset(confirmPasswordResetModel: ConfirmPasswordResetModel): Promise<LoginModel> {
    try {
        await firebase
            .auth()
            .confirmPasswordReset(confirmPasswordResetModel.actionCode, confirmPasswordResetModel.newPassword);

        return {
            username: confirmPasswordResetModel.email,
            password: confirmPasswordResetModel.newPassword,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function revokeEmailChange(revokeEmailChangeModel: RevokeEmailChangeModel): Promise<ResetPasswordModel> {
    try {
        const actionCode = revokeEmailChangeModel.actionCode;
        const info = await firebase.auth().checkActionCode(actionCode);

        await firebase.auth().applyActionCode(actionCode);
        const restoredEmail = info.data.email;

        return {
            email: restoredEmail || '',
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export async function verifyEmail(verifyEmailModel: VerifyEmailModel): Promise<boolean> {
    try {
        firebase.auth().applyActionCode(verifyEmailModel.ationCode);
        return true;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = getErrorMessageFromFirebaseErrorCode(errorCode);
        throw new Error(errorMessage);
    }
}

export function createUser(): Promise<UserModel> {
    return new Promise((resolve, reject) => {
        reject();
    });
}

export function updateUser(): Promise<UserModel> {
    return new Promise((resolve, reject) => {
        reject();
    });
}

export function deleteUser(): Promise<boolean> {
    return new Promise((resolve, reject) => {
        reject();
    });
}
