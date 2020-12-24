import React from 'react';

import NotFound from '../views/NotFound/NotFound';
import Home from '../views/Home/Home';
import UserList from '../views/Users/UserList';
import CurrentUser from '../views/Users/CurrentUser';
import CurrentMessages from '../views/Messages/CurrentMessages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';

export default function DefaultRouter() {//todo: move to separate routes
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="users">List of users</Link>
                    </li>
                    <li>
                        <Link to="currentChat">Current chat</Link>
                    </li>
                    <li>
                        <Link to="currentChatterProfile">Current chatter profile</Link>
                    </li>
                    <li>
                        <Link to="*">All else</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/users">
                        <UserList/>
                    </Route>
                    <Route exact path="/currentChat">
                        <CurrentMessages/>
                    </Route>
                    <Route exact path="/currentChatterProfile">
                        <CurrentUser/>
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
