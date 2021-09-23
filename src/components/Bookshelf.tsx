import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AiTwotoneBook } from 'react-icons/ai';

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
    constructor(props: Props) {
        super(props)
        this.state = {
            books: [{
                title: "",
                author: "",
                genre: "",
                cover: "",
                sharedWith: "",
                sharedDate: ""
            }]
        }
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
        // if (book.title === "") {
        //     return (<Redirect to='/book/create' />)
        // } 
            return (
                <div>
                    My Collection of Books:
                    {this.state.books.map((book) => {
                        return (
                            <>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            Author: {book.author}<br />
                                            Genre: {book.genre}
                                        </Card.Text>
                                        {book.sharedWith !== "" ? <Button variant="outline-secondary">Lend</Button> : <Button variant="outline-secondary">Mark Returned</Button>}
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })}
                </div>
            );
    }
}

export default Bookshelf;