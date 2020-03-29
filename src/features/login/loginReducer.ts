import { UserModel } from 'GlobalTypes';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
    loginUserAsync,
    loginFacebookAsync
} from './loginActions';

const loginReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction([
            loginUserAsync.request,
            loginFacebookAsync.request
        ], (state, action) => true)
        .handleAction([
            loginUserAsync.success,
            loginUserAsync.failure,
            loginFacebookAsync.success,
            loginFacebookAsync.failure
        ],
            (state, action) => false
        ),
    user: createReducer({} as UserModel)
        .handleAction([
            loginUserAsync.success,
            loginFacebookAsync.success
        ],
            (state, action) => action.payload
        )
});

export default loginReducer;