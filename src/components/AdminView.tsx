import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void,
    isAdmin: boolean

}

class AdminView extends Component<Props ,{}> {
    constructor(props:Props) {
        super(props)
    }


    render() {
        if (this.props.isAdmin === false) return "You are not permitted to view this page."

        return (
            <div>
                Welcome, Admin!
            </div>
        );
    }
}

export default AdminView;