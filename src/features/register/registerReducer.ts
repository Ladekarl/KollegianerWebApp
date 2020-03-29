import { UserModel } from 'GlobalTypes';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
    registerUserAsync
} from './registerActions';

const registerReducer = combineReducers({
    isLoading: createReducer(false as boolean)
        .handleAction([registerUserAsync.request], (state, action) => true)
        .handleAction(
            [
                registerUserAsync.success,
                registerUserAsync.failure
            ],
            (state, action) => false
        ),
    user: createReducer({} as UserModel)
        .handleAction(
            [
                registerUserAsync.success,
            ],
            (state, action) => action.payload
        )
});

export default registerReducer;