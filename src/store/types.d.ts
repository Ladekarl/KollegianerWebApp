import { StateType, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { Store } from './index';
import RootAction from './rootAction';
import RootReducer from './rootReducer';

declare module 'GlobalTypes' {
    export type Store = StateType<Store>;
    export type RootState = StateType<ReturnType<typeof RootReducer>>;
    export type RootAction = ActionType<RootAction>;
    export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof RootAction>;
    }
}
