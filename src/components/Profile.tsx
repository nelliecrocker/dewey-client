import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect, Link } from 'react-router-dom'
import '../styling/Profile.css'

type Props = {
    token: string,
    updateToken(newToken: string): void,
}

class Profile extends Component<Props, {}> {

    render() {

        if (this.props.token === "") {
            return (<Redirect to='/user/login' />)} 

            return (
                <div>
                    <Link to='/book/create'>
                        <Button className="card-btn">Add a Book</Button></Link>

                    <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken} />
                </div>
            );
    }
}

export default Profile;
