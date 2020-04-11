import React, { ReactElement } from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Router from './routes/Router';

interface AppProps {
    history: History;
}

const App = ({ history }: AppProps): ReactElement => <ConnectedRouter history={history}>{Router}</ConnectedRouter>;
export default App;
