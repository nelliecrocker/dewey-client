import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styling/Bookshelf.css'

type Props = {
    token: string,
    updateBook(newBook: Book): void,
    deleteBook(newBook: Book): void,
    bookId: number | null,
    navDelete: boolean,
    navUpdate: boolean,
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
    book: Book[],
    id: number | null,
    navRedirect: boolean,
    // navUpdate: boolean,
    // navDelete: boolean
}

class Bookshelf extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            book: [],
            id: null,
            navRedirect: false,
            // navUpdate: false,
            // navDelete: false
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
                    book: json,
                })
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    render() {


        if (this.props.navUpdate === true) {
            return (<Redirect to='/book/update' />)
        } else
            if (this.props.navDelete === true) {
                return (<Redirect to='/book/delete' />)
            }


        return (
            <div className="bookshelf-styling">
                {this.state.book.map((book) => {
                    return (
                        <div>
                            <Card className="card-styling">
                                <Card.Body className="card-body">
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.author}
                                    </Card.Text>

                                    {book.sharedWith === "" ?
                                        <Button onClick={() => {
                                            this.props.updateBook(book)
                                        }}
                                            className="card-btn">
                                            Lend</Button>
                                        :
                                        <Button onClick={() => {
                                            this.props.updateBook(book)
                                        }}
                                            className="card-btn">
                                            Return</Button>}
                                    <br />

                                    <Link
                                        to='/book/delete'>
                                        <Button

                                            onClick={() => {
                                                this.props.deleteBook(book)
                                            }}
                                            className="card-btn2">Donate</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
                }

            </div >
        );
    }
}

export default Bookshelf;