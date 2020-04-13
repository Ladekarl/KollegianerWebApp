import { UserModel, EmailModel } from 'GlobalTypes';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync,
    resetPasswordAsync,
    verifyPasswordResetCodeAsync,
    revokeEmailChangeAsync,
    confirmPasswordResetAsync,
    verifyEmailAsync,
} from './loginActions';

const loginReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction(
            [
                loginUserAsync.request,
                loginFacebookAsync.request,
                resetPasswordAsync.request,
                verifyPasswordResetCodeAsync.request,
                confirmPasswordResetAsync.request,
                revokeEmailChangeAsync.request,
                verifyEmailAsync.request,
            ],
            () => true,
        )
        .handleAction(
            [
                loginUserAsync.success,
                loginUserAsync.failure,
                loginFacebookAsync.success,
                loginFacebookAsync.failure,
                resetPasswordAsync.success,
                resetPasswordAsync.failure,
                verifyPasswordResetCodeAsync.success,
                verifyPasswordResetCodeAsync.failure,
                confirmPasswordResetAsync.success,
                confirmPasswordResetAsync.failure,
                revokeEmailChangeAsync.success,
                revokeEmailChangeAsync.failure,
                verifyEmailAsync.success,
                verifyEmailAsync.failure,
            ],
            () => false,
        ),
    user: createReducer({} as UserModel).handleAction(
        [loginUserAsync.success, loginFacebookAsync.success],
        (state, action) => action.payload,
    ),
    error: createReducer({} as Error)
        .handleAction(
            [
                loginUserAsync.request,
                loginUserAsync.success,
                loginFacebookAsync.request,
                loginFacebookAsync.success,
                resetPasswordAsync.request,
                resetPasswordAsync.success,
                verifyPasswordResetCodeAsync.request,
                verifyPasswordResetCodeAsync.success,
                confirmPasswordResetAsync.request,
                confirmPasswordResetAsync.success,
                revokeEmailChangeAsync.request,
                revokeEmailChangeAsync.success,
                verifyEmailAsync.request,
                verifyEmailAsync.success,
            ],
            () => new Error(),
        )
        .handleAction(
            [
                loginUserAsync.failure,
                loginFacebookAsync.failure,
                resetPasswordAsync.failure,
                verifyPasswordResetCodeAsync.failure,
                confirmPasswordResetAsync.failure,
                revokeEmailChangeAsync.failure,
                verifyEmailAsync.failure,
            ],
            (state, action) => action.payload,
        ),
    email: createReducer({} as EmailModel).handleAction(
        [verifyPasswordResetCodeAsync.success, revokeEmailChangeAsync.success],
        (state, action) => action.payload,
    ),
});

export default loginReducer;
