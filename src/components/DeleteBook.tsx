import React, { Component } from 'react';
import '../styling/Login.css'
import { Redirect, Link } from 'react-router-dom'
import { Button } from 'reactstrap'




type Props = {
    token: string,
    updateToken(newToken: string): void,
    book: Book,
    bookId: number | null,
    navDelete: boolean,
    toggleDeleteNav(): void



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
    constructor(props: Props) {
        super(props)
        this.state = {
            title: this.props.book.title,
            author: this.props.book.author,
            navDelete: this.props.navDelete
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
            .then(() => {
                this.setState({
                    title: null,
                    author: null,
                    id: null,
                    navDelete: false
                })
                this.props.toggleDeleteNav()
            }
            )
        // console.log("navDelete state", this.props.navDelete)
    }

    onCancel = () => {
        this.props.toggleDeleteNav()
    }


    render() {

        if (this.props.navDelete === false) {
            return (<Redirect to='/user/profile' />)
        }


        console.log(this.state)
        return (
            <div className="body-styling">
                <p>Are you sure you want to delete this book?
                </p>
                {this.props.book.title}
                <br />
                by {this.props.book.author}
                <br />
                <Button onClick={this.onDelete}
                    className="Btn-delete">Delete</Button>
                <br />
                <br />
                <Link onClick={this.onCancel} className="Link-Stylex" to='/user/profile'>No thanks</Link>

            </div>
        );
    }
}

export default DeleteBook;