import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { Login, Register, Profile, Landing } from './Index'

type Props = {}


class Navbar extends Component<Props, {}> {
    

    render() {
        return (
            <Router>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>
                </div>

                <Switch>
                    <Route exact path="/" component={Landing}>
                    </Route>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    <Route exact path="/register" component={Register}>
                    </Route>
                    <Route exact path="/profile/:id" component={Profile}>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default Navbar;