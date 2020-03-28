import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/main/home/Home';
import Menu from '../pages/header/Menu';
import Footer from '../pages/footer/Footer';
import Routes from './Routes';
import Login from '../pages/main/login/Login';
import Register from '../pages/main/register/Register';
import ComingSoon from '../pages/main/comingSoon/ComingSoon';

export default (
    <div>
        <Menu />
        <Switch>
            <Route exact path={Routes.FORSIDE} render={() => <Home />} />
            <Route exact path={Routes.ALLE_SEJLTOGTER} render={(() => (<ComingSoon />))} />
            <Route exact path={Routes.OPRET_GASTEPROFIL} render={() => <Register />} />
            <Route exact path={Routes.OPRET_SKIPPERPROFIL} render={() => (<ComingSoon />)} />
            <Route exact path={Routes.OM_OS} render={() => (<ComingSoon />)} />
            <Route exact path={Routes.VÆRD_AT_VIDE} render={() => (<ComingSoon />)} />
            <Route exact path={Routes.ØKONOMI} render={() => (<ComingSoon />)} />
            <Route exact path={Routes.PRIVATLIVSPOLITIK} render={() => (<ComingSoon />)} />
            <Route exact path={Routes.LOGIN} render={() => <Login />} />
        </Switch>
        <Footer />
    </div>
)