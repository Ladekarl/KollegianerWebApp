import { combineEpics } from 'redux-observable';

import * as app from '../features/app/appEpics';
import * as login from '../features/login/loginEpics';
import * as register from '../features/register/registerEpics';

export default combineEpics(
    ...Object.values(app),
    ...Object.values(login),
    ...Object.values(register)
);