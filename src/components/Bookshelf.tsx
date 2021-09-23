import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void
}

type Book = {
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string
}

type State = {
    books: Book[]
}

class Bookshelf extends Component<Props, State>{
    state = {
        books: [{
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }]
    }

    componentDidMount() {
        this.displayBookData()
    }

    displayBookData = () => {
        fetch("http://localhost:3000/book/mybooks", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token}`
            })
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    books: json
                })
                console.log(json)
                console.log(this.state.books)
            })

            .catch(err => console.log(err))

    }
    

    render() {
        //needs to redirect to create a book if no books are found
                if (this.props.token === "") {
            return (<Redirect to='/user/login' />)
        } else

        return (
            <div>
                My Collection of Books:
                {/* Turn into a table */}
                {this.state.books.map((book) => { 
                    return (
                    <ul>
                        <li>{book.title}</li>
                    <li>{book.author}</li>
                    <li>{book.genre}</li>
                    <li>On the Shelf</li>
                    {/* ({book.sharedWith !== "" ? 
                    <li>{book.sharedWith}</li>
                    <li>{book.sharedDate}</li>
                    : null }) */}
                    </ul>
                    )
                })}
            </div>
        );
    }
}

export default Bookshelf;