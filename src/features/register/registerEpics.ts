import { RootEpic } from 'GlobalTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { registerUserAsync } from './registerActions';

export const authRegisterUserEpic: RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(registerUserAsync.request)),
        switchMap((action) =>
            from(api.auth.createUser(action.payload)).pipe(
                map(registerUserAsync.success),
                catchError((message) => of(registerUserAsync.failure(message))),
            ),
        ),
    );
