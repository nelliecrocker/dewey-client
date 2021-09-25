import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect, Link } from 'react-router-dom'
import '../styling/Profile.css'

type Props = {
    token: string,
    updateToken(newToken: string): void,
    title: string
}

class Profile extends Component<Props, {}> {

    render() {

        if (this.props.token === "") {
            return (<Redirect to='/user/login' />)} 
            // else if (this.props.title === "") return (<Redirect to='/book/create' />) 

            return (
                <div>
                    {/* <div className="div-styling">
                    {this.props.title === "" ? <p className="text-styling">Oh no! It looks like you don't have any books on your shelf.</p> : null}
                    </div> */}
                    {this.props.title === "" ?<Link to='/book/create'>
                        <Button className="card-btn">Add a Book</Button></Link> : null}

                    <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken} />
                </div>
            );
    }
}

export default Profile;
