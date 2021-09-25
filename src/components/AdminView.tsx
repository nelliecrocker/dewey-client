import React, { Component } from 'react';

type Props = {
    token: string,
    updateToken(newToken: string): void
}

class AdminView extends Component<Props ,{}> {
    render() {
        return (
            <div>
                Welcome, Admin!
            </div>
        );
    }
}

export default AdminView;