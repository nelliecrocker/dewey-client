import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styling/Bookshelf.css'

type Props = {
    token: string,
    updateToken(newToken: string): void,
    updateBook(newBook: Book): void,
    bookId:number | null

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
    navRedirect: boolean
}

class Bookshelf extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            book: [],
            id: null,
            navRedirect: false
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
                    navRedirect: true
                })
                console.log(json)
            })
            .catch(err => console.log(err))
    }

    render() {
        // const { navRedirect } = this.state

        if (this.props.bookId !== null) {
            return <Redirect to='/book/update' />
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
                                    // {navRedirect && (<Redirect to='/user/profile' />)}
                                    :
                                    <Button className="card-btn">Return</Button> }

                                    <br />

                                    <Link 
                                    to='/book/delete'>
                                        <Button className="card-btn2">Donate</Button>
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