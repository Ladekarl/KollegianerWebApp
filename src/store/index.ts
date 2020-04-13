import { applyMiddleware, createStore, StoreEnhancer, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { syncTranslationWithStore, loadTranslations, setLocale, I18nState } from 'react-redux-i18n';
import messages from '../i18n';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'GlobalTypes';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import services from '../services';
import rootEpic from './rootEpic';

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};

const getMiddleware = (): StoreEnhancer => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunk, epicMiddleware, routerMiddleware(history));
    }

    return applyMiddleware(thunk, epicMiddleware, routerMiddleware(history), createLogger());
};

const setupI18n = (store: Store): void => {
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(messages) as never);
    const i18nState = store.getState().i18n as I18nState;
    if (!i18nState.locale) store.dispatch(setLocale('en') as never);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function configureStore() {
    const pReducer = persistReducer(persistConfig, rootReducer(history));
    const store = createStore(pReducer, composeWithDevTools(getMiddleware()));
    setupI18n(store);
    return store;
}
const store = configureStore();

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

export default store;
