import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Header from './Header';
import DestinationMap from './DestinationMap';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/StumbleGrumble" component={App} />
            <Route exact path="/results/directions" component={DestinationMap}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
