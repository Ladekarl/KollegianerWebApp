import { applyMiddleware, createStore, PreloadedState, Store, AnyAction, StoreEnhancer } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { syncTranslationWithStore, loadTranslations } from 'react-redux-i18n';
import messages from '../i18n';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'GlobalTypes';
import services from '../services';
import rootEpic from './rootEpic';

export const history = createBrowserHistory();

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
});

const getMiddleware = (): StoreEnhancer => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunk, epicMiddleware, routerMiddleware(history));
    }

    return applyMiddleware(thunk, epicMiddleware, routerMiddleware(history), createLogger());
};

export function configureStore(preloadedState: PreloadedState<RootState>): Store<RootState, AnyAction> {
    const store = createStore(rootReducer(history), preloadedState, composeWithDevTools(getMiddleware()));

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(messages) as never);

    return store;
}

const initialState = {
    i18n: {
        locale: 'da',
    },
};
const overrideValues = {
    login: {
        isLoading: false,
        error: new Error(),
    },
};
const preloadedState = services.localStorage.get('store') || initialState;
const preloadedOverriddenState = { ...preloadedState, ...overrideValues };
const store = configureStore(preloadedOverriddenState);

epicMiddleware.run(rootEpic);

export default store;
