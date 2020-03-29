import * as logger from './loggerService';
import * as toast from './toastService';
import * as localStorage from './localStorageService';
import * as auth from './api/authApiClient';

export default {
    logger,
    localStorage,
    toast,
    api: {
        auth,
    },
}