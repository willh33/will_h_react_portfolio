import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Container from './Container';

const Routes = () =>
	<Router>
        <Switch>
            <Route exact path='/'>
				<Container>
                	<AboutMe />
				</Container>
            </Route>
            <Route path='/contact'>
				<Container>
                	<Contact />
				</Container>
            </Route>
            <Route path='/portfolio'>
				<Container>
                	<Portfolio />
				</Container>
            </Route>
        </Switch>
    </Router>

export default Routes;