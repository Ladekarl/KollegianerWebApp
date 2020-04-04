import { createAsyncAction } from 'typesafe-actions';
import { UserModel, LoginModel, ResetPasswordModel } from 'GlobalTypes';

export const loginUserAsync = createAsyncAction(
    'LOGIN_USER_REQUEST',
    'LOGIN_USER_SUCCESS',
    'LOGIN_USER_FAILURE'
)<LoginModel, UserModel, Error>();

export const loginFacebookAsync = createAsyncAction(
    'LOGIN_FACEBOOK_REQUEST',
    'LOGIN_FACEBOOK_SUCCESS',
    'LOGIN_FACEBOOK_FAILURE'
)<undefined, UserModel, Error>();

export const resetPasswordAsync = createAsyncAction(
    'RESET_PASSWORD_REQUEST',
    'RESET_PASSWORD_SUCCESS',
    'RESET_PASSWORD_FAILURE'
)<ResetPasswordModel, boolean, Error>();