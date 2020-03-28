import { applyMiddleware, createStore, PreloadedState, Store, AnyAction } from 'redux';
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './reducers/rootReducer'

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      routerMiddleware(history)
    );
  }
  return applyMiddleware(
    routerMiddleware(history),
    createLogger()
  );
};

export const history = createBrowserHistory();

export default function configureStore(preloadedState: PreloadedState<any>): Store<any, AnyAction> {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools((
      getMiddleware()
    ))
  )

  return store
};