import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Routes = () =>
	<Router>
        <Switch>
            <Route exact path='/'>
                <AboutMe />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Route path='/portfolio'>
                <Portfolio />
            </Route>
        </Switch>
    </Router>

export default Routes;