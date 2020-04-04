import { routerActions } from 'connected-react-router';
import * as loginActions from '../features/login/loginActions';
import * as registerActions from '../features/register/registerActions';

export default {
    router: routerActions,
    loginActions,
    registerActions,
};
