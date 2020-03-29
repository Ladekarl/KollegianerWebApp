import { UserModel, LoginModel, RegisterModel } from 'GlobalTypes';
import firebase, { FacebookAuthProvider } from '../../firebase';

export function loginUser(login: LoginModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
    });
}

export async function loginFacebook(): Promise<UserModel> {
    const provider = FacebookAuthProvider;
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const credential = (result.credential as firebase.auth.OAuthCredential);
        const token = credential.accessToken;
        const user = result.user;
        if (user != null && token != null) {
            return {
                id: user.uid,
                name: user.displayName || '',
                email: user.email || '',
                token: token
            };
        } else {
            throw { message: 'could not retrive user or token' }
        }
    }
    catch (error) {
        throw error.message;
    }
}

export function createUser(user: RegisterModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
    });
}

export function updateUser(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
    });
}

export function deleteUser(user: UserModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
    });
}