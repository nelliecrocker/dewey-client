import React, { Component } from 'react';
import '../styling/Home.css'
import { Redirect, Link } from 'react-router-dom'



type Props = {
    token: string,
    updateToken(newToken: string): void,
    book: Book,
    bookId: number | null
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


class DeleteBook extends Component<Props, {}> {
    constructor(props:Props){
        super(props)
        this.state = {
            title: this.props.book.title,
            author: this.props.book.author
        }
    }

    onDelete = () => {
        fetch(`http://localhost:3000/book/delete/${this.props.book.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.props.token}`
            }),
        })
    }

    render() {
        if (this.props.token === "") {
            return <Redirect to='/user/login' />
        }
        console.log(this.state)
        return (
            <div className="body-styling">
                <p>Are you sure you want to delete this book?
                </p>
                {this.props.book.title}
                {this.props.book.author}
                <button onClick={this.onDelete} className="Btn-home">Delete</button>
            </div>
        );
    }
}

export default DeleteBook;