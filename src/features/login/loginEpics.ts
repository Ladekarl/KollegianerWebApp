import { RootEpic } from 'GlobalTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync,
    resetPasswordAsync,
} from './loginActions';
import { I18n } from 'react-redux-i18n';

export const authLoginUserEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(loginUserAsync.request)),
        switchMap(action =>
            from(api.auth.loginUser(action.payload)).pipe(
                map(loginUserAsync.success),
                catchError(error => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(loginUserAsync.failure(error));
                })
            )
        )
    );

export const authLoginFacebookEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(loginFacebookAsync.request)),
        switchMap(() =>
            from(api.auth.loginFacebook()).pipe(
                map(loginFacebookAsync.success),
                catchError(error => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(loginFacebookAsync.failure(error));
                })
            )
        )
    );

export const authResetPasswordEpic: RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(resetPasswordAsync.request)),
        switchMap(action =>
            from(api.auth.resetPassword(action.payload)).pipe(
                map(resetPasswordAsync.success),
                catchError(error => {
                    if (error.message) {
                        toast.error(I18n.t(error.message));
                    }
                    return of(resetPasswordAsync.failure(error));
                })
            )
        )
    );
