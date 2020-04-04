import { RootEpic } from 'GlobalTypes';
import throttle from 'lodash/throttle';
import { tap, ignoreElements } from 'rxjs/operators';

export const persistStoreInLocalStorage: RootEpic = (action$, store, { localStorage }) =>
    action$.pipe(
        tap(
            throttle(() => {
                localStorage.set('store', store.value);
            }, 1000),
        ),
        ignoreElements(),
    );
