import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect, Link } from 'react-router-dom'
import '../styling/Profile.css'
import { User } from '../Types/User'


type Props = {
    token: string,
    updateToken(newToken: string): void,
    updateBook(newBook: Book): void,
    deleteBook(newBook: Book): void,
    bookId: number | null,
    navUpdate: boolean,
    navDelete: boolean,
    toggleDeleteNav(): void,
    toggleUpdateNav(): void,
    newUser: User

}

type Book = {
    id: number | null,
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string
}

type State = {
    bookshelfView: boolean
    // adminView: boolean
}

class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            bookshelfView: false,
            // adminView: this.props.newUser.isAdmin
        }
    }

    toggleBookshelf = () => {
        this.setState({
            bookshelfView: !this.state.bookshelfView
        })
    }

    // toggleAdmin = () => {
    //     this.setState({
    //         adminView: !this.props.newUser.isAdmin
    //     })
    // }

    render() {

        if (this.props.token === "") {
            return (<Redirect to='/user/login' />)
        }
        console.log(this.props.newUser.isAdmin)
        return (
            <div>

                <Link to='/book/create'>
                    <Button className="card-btn">Add a Book</Button></Link>
                <br />
                <Button onClick={this.toggleBookshelf} className="card-btn">Bookshelf</Button>
                {this.state.bookshelfView === false ? null :
                    <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken}
                        updateBook={this.props.updateBook}
                        deleteBook={this.props.deleteBook}
                        bookId={this.props.bookId}
                        navUpdate={this.props.navUpdate}
                        navDelete={this.props.navDelete}
                        toggleDeleteNav={this.props.toggleDeleteNav}
                        toggleUpdateNav={this.props.toggleUpdateNav}
                    />
                }
            </div>
        );
    }
}

export default Profile;