import { UserModel, LoginModel, RegisterModel, ResetPasswordModel } from 'GlobalTypes';
import firebase, { FacebookAuthProvider } from '../../firebase';

export async function loginUser(login: LoginModel): Promise<UserModel> {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(login.username, login.password);
        const user = result.user;
        if (user != null) {
            return {
                id: user.uid,
                name: user.displayName || '',
                email: user.email || ''
            }
        } else {
            throw new Error('login.unknownError')
        }
    }
    catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
            throw new Error('login.invalidEmail')
        }
        else if (errorCode === 'auth/user-disabled') {
            throw new Error('login.userDisabled')
        }
        else if (errorCode === 'auth/user-not-found') {
            throw new Error('login.userNotFound')
        }
        else if (errorCode === 'auth/wrong-password') {
            throw new Error('login.wrongPassword')
        }
        else {
            throw new Error('login.unknownError')
        }
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
                email: user.email || ''
            };
        } else {
            throw new Error('login.unknownError')
        }
    }
    catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/account-exists-with-different-credential') {
            throw new Error('login.accountExistsWithDifferentCredential')
        }
        else if (errorCode === 'auth/auth-domain-config-required') {
            throw new Error('login.authDomainConfigRequired')
        }
        else if (errorCode === 'auth/cancelled-popup-request') {
            throw new Error('login.cancelledPopupRequest')
        }
        else if (errorCode === 'auth/operation-not-allowed') {
            throw new Error('login.operationNotAllowed')
        }
        else if (errorCode === 'auth/operation-not-supported-in-this-environment') {
            throw new Error('login.operationNotSupportedInThisEnvironment')
        }
        else if (errorCode === 'auth/popup-blocked') {
            throw new Error('login.popupBlocked')
        }
        else if (errorCode === 'auth/popup-closed-by-user') {
            throw new Error('login.popupClosedByUser')
        }
        else if (errorCode === 'auth/unauthorized-domainr') {
            throw new Error('login.unauthorizedDomainNr')
        }
        else {
            throw new Error('login.unknownError')
        }
    }
}

export async function resetPassword(resetPasswordModel: ResetPasswordModel): Promise<boolean> {
    try {
        await firebase.auth().sendPasswordResetEmail(resetPasswordModel.email);
        return true;
    }
    catch (error) {
        throw new Error('login.unknownError')
    }
}

export function createUser(user: RegisterModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
        reject();
    });
}

export function updateUser(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
        reject();
    });
}

export function deleteUser(user: UserModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
        reject();
    });
}