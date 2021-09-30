import React, { Component } from 'react';
import '../styling/Home.css'
import {Link} from 'react-router-dom'

import {User} from '../Types/User'


type Props = {
    token: string,
    newUser: User
}


class AdminView extends Component<Props ,{}> {
    constructor(props:Props) {
        super(props)

    }

    render() {
        

        return (
            <div className="body-styling">
                <p>Hey! You're an admin!
                
                <Link className="link-styling" to='/user/profile'><button className="Btn-home">Profile</button></Link>
            </p>
            </div>
        );
    }
}

export default AdminView;