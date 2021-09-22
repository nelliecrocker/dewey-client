import React, { Component } from 'react';
// import { useParams } from 'react-router-dom'
import { Bookshelf } from './Index'
import { Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void
}


class Profile extends Component<Props, {}> {
    constructor(props:Props){
        super(props)
    }

    render() {

        if (this.props.token === "") {
            return <Redirect to='/' />
        }

        return (
            <div>
                My Profile
                <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken}/>
            </div>
        );
    }
}

export default Profile;