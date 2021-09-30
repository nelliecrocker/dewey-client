import React, { Component } from 'react';
import {User} from '../Types/User'


type Props = {
    token: string,
    updateToken(newToken: string): void,
    newUser: User
   

}


class AdminView extends Component<Props ,{}> {
    constructor(props:Props) {
        super(props)

    }

    render() {
        

        return (
            <div>
                Hey, Admin!
            </div>
        );
    }
}

export default AdminView;