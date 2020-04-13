import { combineEpics } from 'redux-observable';

import * as login from '../features/login/loginEpics';

export default combineEpics(...Object.values(login));
