import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

type Props = {
    token: string
}

type State = {
    clearToken(): void,
    sessionToken: string
}

class Navbar extends Component<Props, State> {

    clearToken = () => {
        localStorage.clear()
        this.setState({ sessionToken: "" })
    }

    navLogin = () => {
        <Redirect to='/user/login' />
    }

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

                    {/* Display Login or Logout based on props */}
                    {this.props.token !== ""
                        ? <button onClick={this.clearToken}>Logout</button>
                        : <button onClick={this.navLogin}>Login</button>
                    }
                </ul>

            </div >
        );
    }
}

export default Navbar;