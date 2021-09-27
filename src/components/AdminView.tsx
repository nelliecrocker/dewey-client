import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void,
    isAdmin: boolean,
    // username: string

}

class AdminView extends Component<Props ,{}> {
    // constructor(props:Props) {
    //     super(props)
    // }


    render() {
        const isAdmin = this.props.isAdmin
        // const username = this.props.username
        {console.log(isAdmin)}

        if (this.props.isAdmin === false) return "You are not permitted to view this page."

        return (
            <div>
                Welcome, Admin!
            </div>
        );
    }
}

export default AdminView;