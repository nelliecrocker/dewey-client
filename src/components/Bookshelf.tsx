import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styling/Bookshelf.css'

type Props = {
    token: string,
    updateToken(newToken: string): void
    updateBook(newBook: Book): void
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
    id: number
}

class Bookshelf extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            book: [],
            id: 0
            // id: null
        }
    }

    componentDidMount() {
        this.displayBookData()

    }
    // ********************************************************************

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
                    book: json
                })
                console.log(json)
                console.log(this.state.book[5].id)
            })
            .catch(err => console.log(err))
    }

    // ********************************************************************

    // onUpdate = () => {
    //             
    // //change to props not state
    //         fetch(`http://localhost:3000/book/update/${this.state.id} `, {
    //             method: 'PUT',
    //             body: JSON.stringify({
    //                 book: {
    //                     id: this.state.book.id,
    //                     title: this.state.book.title,
    //                     author: this.state.book.author,
    //                     genre: this.state.book.genre,
    //                     cover: this.state.book.cover,
    //                     sharedWith: this.state.book.sharedWith,
    //                     sharedDate: this.state.book.sharedDate
    //                 }
    //             }),
    //             headers: new Headers({
    //                 'Content-Type': 'application/json',
    //                 "Authorization": `Bearer ${this.props.token} `
    //             })
    //         })
    //             .then(res => res.json())
    //             .then((data) => {
    //                 console.log(data)
    //             })
    //             .catch(err => console.log(err))
    //     }
    // ********************************************************************



    render() {
        // {console.log("book state", this.state.book)}
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
                                        // <Link to='/book/update'>
                                            //! add get function with id endpoint and add onclick to button to grab the book id
                                            <Button
                                                onClick={() =>{this.props.updateBook(book)
                                            }}


                                                //!add prop to identify book and send through to UpdateBook; struggling because Books is a type
                                                // book={this.state.book} 

                                                className="card-btn"
                                            >Lend</Button>
                                            // </Link>
                                            : <Button className="card-btn">Return</Button>}<br />

                                    <Link to='/book/delete'>
                                    <Button className="card-btn2">Donate</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Bookshelf;