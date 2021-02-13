import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Project from './Project';

const Routes = () =>
	<Router>
        <Switch>
            <Route exact path='/'>
				<Project>
                	<AboutMe />
				</Project>
            </Route>
            <Route path='/contact'>
				<Project>
                	<Contact />
				</Project>
            </Route>
            <Route path='/portfolio'>
				<Project>
                	<Portfolio />
				</Project>
            </Route>
        </Switch>
    </Router>

export default Routes;