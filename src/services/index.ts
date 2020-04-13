import * as logger from './loggerService';
import * as toast from './toastService';
import * as auth from './api/authApiClient';

export default {
    logger,
    toast,
    api: {
        auth,
    },
};
