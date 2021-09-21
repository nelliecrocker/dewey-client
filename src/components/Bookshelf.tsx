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
        fetch("http://localhost:3000/book/allbooks", {
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
                // ! this is a key piece...how to map to display at the interval
                console.log(json[0].title)
                console.log(this.state.books)
            })

            .catch(err => console.log(err))

    }
    //             let i: number = 0
    // {
    //     for (let i = 0; i < Bookshelf.length; i++)

    render() {
        //needs to redirect to create a book if no books are found
        // if (this.state.books == "") {
        //     return <Redirect to='/book/create' />
        // }

        // if (this.props.token === "") {
        //     return <Redirect to='/user/login' />
        // }

        return (
            <div>
                Bookshelf Data:
                {/* Turn into a table */}
                {this.state.books.map((book) => { 
                    return(<ul><li>{book.title}</li>
                    <li>{book.author}</li>
                    <li>{book.genre}</li>
                    <li>{book.sharedWith}</li>
                    <li>{book.sharedDate}</li>
                    </ul>)
                })}
            </div>
        );
    }
}

export default Bookshelf;