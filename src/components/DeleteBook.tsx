import React, { Component } from 'react';


type Props = {
    token: string,
    updateToken(newToken: string): void
}


class DeleteBook extends Component<Props, {}> {
    render() {
        return (
            <div>
                delete book
            </div>
        );
    }
}

export default DeleteBook;