import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Gear from './Components/Gear/Gear';
import Map from './Components/Map/Map';
import Info from './Components/Info/Info';
import Cart from './Components/Cart/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Gear' component={Gear}/>
        <Route path='/Info' component={Info}/>
        <Route path='/Map' component={Map}/>
        <Route path='/Cart' component={Cart}/>
    </Switch>
);