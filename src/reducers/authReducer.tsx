import {
    LOGIN,
    REGISTER
} from '../actions/authActions';
import { Action } from 'redux';

interface AuthState {
    inProgress: boolean
}

const initialState: AuthState = {
    inProgress: false
}

export default (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                inProgress: false
            };
        default:
            return state;
    }
};