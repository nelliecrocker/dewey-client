import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
// import { Profile } from './Index'
import { Register, Login } from '../auth/index'
import { CreateBook, Profile, Home } from './Index';

type Props = {}


class Navbar extends Component<Props, {}> {
    
    
    render() {
        return (
            <div>
                <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/user/register'>Register</Link></li>
                <li><Link to='/user/login'>Login</Link></li>
                <li><Link to='/user/profile'>Profile</Link></li>
                <li><Link to='/book/create'>Create a Book</Link></li>
            </ul>
            {/* <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route exact path='/user/register'>Register</Route>
                <Route exact path='/user/login'>Login</Route>
                <Route exact path='/user/profile'>Profile</Route>
                <Route exact path='/book/create'>Create a Book</Route>
            </Switch> */}
            
            </div>
        );
    }
}

export default Navbar;