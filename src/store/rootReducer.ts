import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { i18nReducer } from 'react-redux-i18n';
import login from '../features/login/loginReducer';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        i18n: i18nReducer,
        login,
    });

export default rootReducer;
