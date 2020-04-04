import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import Menu from '../pages/header/Menu';
import Footer from '../pages/footer/Footer';
import { getPath } from './routes';
import Login from '../features/login/components/Login';
import Register from '../features/register/components/Register';
import ComingSoon from '../pages/comingSoon/ComingSoon';

export default (
    <div>
        <Menu />
        <Switch>
            <Route exact path={getPath('home')} render={(): React.ReactElement => <Home />} />
            <Route exact path={getPath('aboutUs')} render={(): React.ReactElement => <ComingSoon />} />
            <Route exact path={getPath('privacyPolicy')} render={(): React.ReactElement => <ComingSoon />} />
            <Route exact path={getPath('register')} render={(): React.ReactElement => <Register />} />
            <Route exact path={getPath('login')} render={(): React.ReactElement => <Login forgotPassword={false} />} />
            <Route
                exact
                path={getPath('forgotPassword')}
                render={(): React.ReactElement => <Login forgotPassword={true} />}
            />
            <Route exact path={getPath('usermgt')} render={(): React.ReactElement => <Login forgotPassword={true} />} />
        </Switch>
        <Footer />
    </div>
);
