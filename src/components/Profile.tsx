import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void
}




class Profile extends Component<Props, {}> {
    

    render() {

        if (this.props.token === "") {
            return (<Redirect to='/user/login' />)}

            return (
                <div>
                    
                    <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken} />
                </div>
            );
    }
}

export default Profile;
