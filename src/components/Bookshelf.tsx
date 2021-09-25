import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styling/Bookshelf.css'

type Props = {
    token: string,
    updateToken(newToken: string): void
}

type Book = {
    id: number,
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
            books: []
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

        return (
            <div className="bookshelf-styling">
                {this.state.books.map((book) => {
                    return (
                        <div>
                            <Card className="card-styling">
                                <Card.Body className="card-body">
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.author}
                                    </Card.Text>

                                    {book.sharedWith === "" ?
                                        <Link to='/book/update/'>
                                            <Button
                                                //add prop to identify book
                                                //! Book={this.props.book}
                                                className="card-btn" >Lend</Button></Link> : <Button className="card-btn">Returned</Button>}<br />

                                    <Button className="card-btn2">Donate</Button>
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