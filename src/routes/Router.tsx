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
            <Route exact path={getPath('home')} render={() => <Home />} />
            <Route exact path={getPath('aboutUs')} render={() => (<ComingSoon />)} />
            <Route exact path={getPath('privacyPolicy')} render={() => (<ComingSoon />)} />
            <Route exact path={getPath('register')} render={() => <Register />} />
            <Route exact path={getPath('login')} render={() => <Login />} />
        </Switch>
        <Footer />
    </div>
)