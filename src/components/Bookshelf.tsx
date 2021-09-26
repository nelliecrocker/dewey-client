import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import '../styling/Bookshelf.css'

type Props = {
    token: string,
    updateToken(newToken: string): void
    // book: Book[]
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
    book: Book[]
}

class Bookshelf extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            book: []
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
                    book: json
                })
                console.log(json)
                console.log(this.state.book)
            })
            .catch(err => console.log(err))
    }


    render() {

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
                                        <Link to='/book/update/'>
                                            <Button
                                                // token={this.props.token}
                                                // updateToken={this.props.updateToken}
                                                
                                                //!add prop to identify book and send through to UpdateBook; struggling because Books is a type

                                                // book={this.state.book} 

                                                className="card-btn" 
                                            >Lend</Button></Link> : <Button className="card-btn">Return</Button>}<br />

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