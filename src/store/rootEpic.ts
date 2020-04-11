import { combineEpics } from 'redux-observable';

import * as app from '../features/app/appEpics';
import * as login from '../features/login/loginEpics';

export default combineEpics(...Object.values(app), ...Object.values(login));
