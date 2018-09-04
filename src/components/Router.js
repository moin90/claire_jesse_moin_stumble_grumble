import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Header from './Header';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/StumbleGrumble" component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router;
