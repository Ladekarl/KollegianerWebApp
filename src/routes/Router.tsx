import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/home/Home';
import Menu from '../pages/header/Menu';
import Footer from '../pages/footer/Footer';
import { getPath } from './routes';
import Login from '../features/login/components/Login';
import ComingSoon from '../pages/comingSoon/ComingSoon';
import ForgotPassword from '../features/login/components/ForgotPassword';
import UserMgmt from '../features/login/components/UserMgmt';

export default (
    <div id="main">
        <Menu />
        <div id="content">
            <Switch>
                <Route exact path={getPath('home')} render={(): React.ReactElement => <Home />} />
                <Route exact path={getPath('aboutUs')} render={(): React.ReactElement => <ComingSoon />} />
                <Route exact path={getPath('privacyPolicy')} render={(): React.ReactElement => <ComingSoon />} />
                <Route exact path={getPath('login')} render={(): React.ReactElement => <Login />} />
                <Route exact path={getPath('forgotPassword')} render={(): React.ReactElement => <ForgotPassword />} />
                <Route exact path={getPath('usermgmt')} render={(): React.ReactElement => <UserMgmt />} />
            </Switch>
        </div>
        <Footer />
    </div>
);
