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
                <li><Link to='/book/bookshelf'>View Bookshelf</Link></li>
            </ul>
            
            </div>
        );
    }
}

export default Navbar;