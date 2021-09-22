import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void

}

type State = {
    clearToken(): void,
    sessionToken: string
}


class Navbar extends Component<Props, State> {
    componentDidMount() {
        this.clearToken()
    }

    clearToken = () => {
        // localStorage.getItem('sessionToken')
        localStorage.clear()
        this.props.updateToken("")
        // this.setState({ sessionToken: "" })
        // {<Redirect to='/user/login' />}

        
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
                        : null
                    }
                </ul>

            </div >
        );
    }
}

export default Navbar;