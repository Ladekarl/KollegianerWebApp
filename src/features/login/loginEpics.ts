import { RootEpic } from 'GlobalTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync,
} from './loginActions';

export const authLoginUserEpic: RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(loginUserAsync.request)),
        switchMap(action =>
            from(api.auth.loginUser(action.payload)).pipe(
                map(loginUserAsync.success),
                catchError(message => of(loginUserAsync.failure(message)))
            )
        )
    );

export const authLoginFacebookEpic: RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(loginFacebookAsync.request)),
        switchMap(() =>
            from(api.auth.loginFacebook()).pipe(
                map(loginFacebookAsync.success),
                catchError(message => of(loginFacebookAsync.failure(message)))
            )
        )
    );
