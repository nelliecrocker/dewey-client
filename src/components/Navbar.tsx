import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { Profile } from './Index'
import { Register, Login, Landing } from '../auth/index'
import CreateBook from './CreateBook';

type Props = {}


class Navbar extends Component<Props, {}> {
    constructor(props:Props) {
        super(props)
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            USER: {}
        }
    }
    

    render() {
        return (
            <Router>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/book/create">Create A Book</Link>
                </div>

                <Switch>
                    <Route exact path="/" component={Landing}>
                    </Route>
                    <Route exact path="/user/login" component={Login}>
                    </Route>
                    <Route exact path="/user/register" component={Register}>
                    </Route>
                    <Route exact path="user/profile/:id" component={Profile}>
                    </Route>
                    <Route exact path="/book/create" component={CreateBook}>
                    </Route>

                </Switch>
            </Router>
        );
    }
}

export default Navbar;