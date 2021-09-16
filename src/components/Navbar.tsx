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
            <Route path="/">
                    <Landing />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile/:id">
                    <Profile />
                </Route>

            </Switch>
            </Router>
        );
    }
}

export default Navbar;