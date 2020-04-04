import { UserModel } from 'GlobalTypes';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync,
    resetPasswordAsync
} from './loginActions';

const loginReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction([
            loginUserAsync.request,
            loginFacebookAsync.request,
            resetPasswordAsync.request
        ], (state, action) => true)
        .handleAction([
            loginUserAsync.success,
            loginUserAsync.failure,
            loginFacebookAsync.success,
            loginFacebookAsync.failure,
            resetPasswordAsync.success,
            resetPasswordAsync.failure
        ],
            (state, action) => false
        ),
    user: createReducer({} as UserModel)
        .handleAction([
            loginUserAsync.success,
            loginFacebookAsync.success
        ],
            (state, action) => action.payload
        ),
    error: createReducer({} as Error)
        .handleAction([
            loginUserAsync.request,
            loginUserAsync.success,
            loginFacebookAsync.request,
            loginFacebookAsync.success,
            resetPasswordAsync.request,
            resetPasswordAsync.success
        ],
            (state, action) => new Error()
        )
        .handleAction([
            loginUserAsync.failure,
            loginFacebookAsync.failure,
            resetPasswordAsync.failure
        ],
            (state, action) => action.payload
        )
});

export default loginReducer;