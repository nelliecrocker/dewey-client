import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styling/Home.css'

type Props = {
    token: string,
    updateToken(newToken: string): void

}

class Home extends Component<Props, {}> {
    render() {
        return (
            <>
           {this.props.token === "" ?          
            <div className="body-styling">
                <p>Welcome to the Dewey Collective. We intend to decentralize the mainstream concept of a library and turn book lending into a democratized social experience.
                </p>
                <p>Want to join us? All you need to do is create a profile and fill up your bookshelf with books you are willing to lend.
                </p>
                <Link className="link-styling" to='/user/login'><button className="Btn-home">Login</button></Link>&nbsp;&nbsp;<Link className="link-styling" to='/user/register'><button className="Btn-home">Register</button></Link>
                <p></p>
                <p>If a book comes to the end of its life with you, just click the Donate button to remove it from your digital collection.
                </p>
            </div>
            :
            <div className="body-styling">
                <p>Welcome to the Dewey Collective!
                </p>
                <Link className="link-styling" to='/book/create'><button className="Btn-home">Add a Book</button></Link>&nbsp;&nbsp; <Link className="link-styling" to='/user/profile'><button className="Btn-home">Bookshelf</button></Link>
            </div>
        }
            </>
        );
    }
}

export default Home;