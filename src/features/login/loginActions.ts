import { createAsyncAction } from 'typesafe-actions';
import { LoginModel, UserModel, EmailModel, ActionCodeModel, ConfirmPasswordResetModel } from 'GlobalTypes';

export const loginUserAsync = createAsyncAction('LOGIN_USER_REQUEST', 'LOGIN_USER_SUCCESS', 'LOGIN_USER_FAILURE')<
    LoginModel,
    UserModel,
    Error
>();

export const loginFacebookAsync = createAsyncAction(
    'LOGIN_FACEBOOK_REQUEST',
    'LOGIN_FACEBOOK_SUCCESS',
    'LOGIN_FACEBOOK_FAILURE',
)<undefined, UserModel, Error>();

export const resetPasswordAsync = createAsyncAction(
    'RESET_PASSWORD_REQUEST',
    'RESET_PASSWORD_SUCCESS',
    'RESET_PASSWORD_FAILURE',
)<EmailModel, boolean, Error>();

export const verifyPasswordResetCodeAsync = createAsyncAction(
    'VERIFY_PASSOWRD_RESET_CODE_REQUEST',
    'VERIFY_PASSOWRD_RESET_CODE_SUCCESS',
    'VERIFY_PASSOWRD_RESET_CODE_FAILURE',
)<ActionCodeModel, EmailModel, Error>();

export const confirmPasswordResetAsync = createAsyncAction(
    'CONFIRM_PASSWORD_RESET_REQUEST',
    'CONFIRM_PASSWORD_RESET_SUCCESS',
    'CONFIRM_PASSWORD_RESET_FAILURE',
)<ConfirmPasswordResetModel, LoginModel, Error>();

export const revokeEmailChangeAsync = createAsyncAction(
    'REVOKE_EMAIL_CHANGE_REQUEST',
    'REVOKE_EMAIL_CHANGE_SUCCESS',
    'REVOKE_EMAIL_CHANGE_FAILURE',
)<ActionCodeModel, EmailModel, Error>();

export const verifyEmailAsync = createAsyncAction(
    'VERIFY_EMAIL_REQUEST',
    'VERIFY_EMAIL_SUCCESS',
    'VERIFY_EMAIL_FAILURE',
)<ActionCodeModel, boolean, Error>();
