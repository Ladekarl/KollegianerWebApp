import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import { i18nReducer } from 'react-redux-i18n'
import login from '../features/login/loginReducer';
import register from '../features/register/registerReducer';

const rootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  i18n: i18nReducer,
  login,
  register
});

export default rootReducer