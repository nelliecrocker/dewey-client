import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect, Link } from 'react-router-dom'
import '../styling/Profile.css'

type Props = {
    token: string,
    updateToken(newToken: string): void,
    updateBook(newBook: Book): void,
    deleteBook(newBook: Book): void,
    bookId: number | null,
    navUpdate: boolean,
    navDelete: boolean,
    toggleDeleteNav(): void,
    toggleUpdateNav(): void
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
}




class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            bookshelfView: false
        }
    }

    toggleBookshelf = () => {
        this.setState({
            bookshelfView: true
        })
    }

    render() {

        if (this.props.token === "") {
            return (<Redirect to='/user/login' />)
        }

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