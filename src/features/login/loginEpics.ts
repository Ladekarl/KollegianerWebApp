import { RootEpic } from 'GlobalTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync,
    resetPasswordAsync,
    confirmPasswordResetAsync,
    verifyPasswordResetCodeAsync,
    revokeEmailChangeAsync,
    verifyEmailAsync,
} from './loginActions';
import { I18n } from 'react-redux-i18n';

export const authLoginUserEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(loginUserAsync.request)),
        switchMap((action) =>
            from(api.auth.loginUser(action.payload)).pipe(
                map(loginUserAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(loginUserAsync.failure(error));
                }),
            ),
        ),
    );

export const authLoginFacebookEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(loginFacebookAsync.request)),
        switchMap(() =>
            from(api.auth.loginFacebook()).pipe(
                map(loginFacebookAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(loginFacebookAsync.failure(error));
                }),
            ),
        ),
    );

export const authResetPasswordEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(resetPasswordAsync.request)),
        switchMap((action) =>
            from(api.auth.resetPassword(action.payload)).pipe(
                map(resetPasswordAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(resetPasswordAsync.failure(error));
                }),
            ),
        ),
    );

export const authVerifyPasswordResetCodeEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(verifyPasswordResetCodeAsync.request)),
        switchMap((action) =>
            from(api.auth.verifyPasswordResetCode(action.payload)).pipe(
                map(verifyPasswordResetCodeAsync.success),
                catchError((error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(verifyPasswordResetCodeAsync.failure(error));
                }),
            ),
        ),
    );

export const authConfirmPasswordResetEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(confirmPasswordResetAsync.request)),
        switchMap((action) =>
            from(api.auth.confirmPasswordReset(action.payload)).pipe(
                map(confirmPasswordResetAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(confirmPasswordResetAsync.failure(error));
                }),
            ),
        ),
    );

export const authRevokEmailChangeEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(revokeEmailChangeAsync.request)),
        switchMap((action) =>
            from(api.auth.revokeEmailChange(action.payload)).pipe(
                map(revokeEmailChangeAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(revokeEmailChangeAsync.failure(error));
                }),
            ),
        ),
    );

export const authVerifyEmailEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(verifyEmailAsync.request)),
        switchMap((action) =>
            from(api.auth.verifyEmail(action.payload)).pipe(
                map(verifyEmailAsync.success),
                catchError((error: Error) => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(verifyEmailAsync.failure(error));
                }),
            ),
        ),
    );
