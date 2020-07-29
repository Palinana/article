import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import App from './Components/App';
import LandingPage from './Components/LandingPage/LandingPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} /> 
            <Route exact path="/feed" component={Feed} /> 
            <Route exact path="/article/:id" component={Article} /> 

            */}
            
            {/* Displays Login component as a fallback */}
            <Route component={App} />
        </Switch>
    )
  }
  
  export default Routes;
  