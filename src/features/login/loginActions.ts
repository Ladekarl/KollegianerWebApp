import { createAsyncAction } from 'typesafe-actions';
import { UserModel, LoginModel } from 'GlobalTypes';

export const loginUserAsync = createAsyncAction(
    'LOGIN_USER_REQUEST',
    'LOGIN_USER_SUCCESS',
    'LOGIN_USER_FAILURE'
)<LoginModel, UserModel, string>();

export const loginFacebookAsync = createAsyncAction(
    'LOGIN_FACEBOOK_REQUEST',
    'LOGIN_FACEBOOK_SUCCESS',
    'LOGIN_FACEBOOK_FAILURE'
)<undefined, UserModel, string>();