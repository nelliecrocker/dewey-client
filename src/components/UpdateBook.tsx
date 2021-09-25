import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'
import { Bookshelf } from './Index'

type Props = {
    token: string,
    updateToken(newToken: string): void,
    bookId: number
}

type State = {
    book: {
        id: number,
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    }
}

class UpdateBook extends Component<Props, State> {
    state = {
        book: {
            id: this.props.bookId,
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            book: {
                id: this.state.book.id,
                title: this.state.book.title,
                author: this.state.book.author,
                genre: this.state.book.genre,
                cover: this.state.book.cover,
                sharedWith: this.state.book.sharedWith,
                sharedDate: this.state.book.sharedDate
            }
        })

        fetch(`http://localhost:3000/book/update/${this.state.book.id} `, {
            method: 'PUT',
            body: JSON.stringify({
                book: {
                    id: this.state.book.id,
                    title: this.state.book.title,
                    author: this.state.book.author,
                    genre: this.state.book.genre,
                    cover: this.state.book.cover,
                    sharedWith: this.state.book.sharedWith,
                    sharedDate: this.state.book.sharedDate
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token} `
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div className="Form-Style">
                <Form  onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input className="Form-Input" type="text"
                            name="sharedWith"
                            id="sharedWith"
                            value={this.state.book.sharedWith}
                            placeholder={this.state.book.sharedWith}
                            onChange={(e) => this.setState({ book: { ...this.state.book, sharedWith: e.target.value } })} />
                            <Label></Label>
                        <Input className="Form-Input" type="text"
                            name="sharedDate"
                            id="sharedDate"
                            value={this.state.book.sharedDate}
                            placeholder={this.state.book.sharedDate}
                            onChange={(e) => this.setState({ book: { ...this.state.book, sharedDate: e.target.value } })} />
                    </FormGroup>
                    <Button className="Btn-login">Mark as Borrowed</Button>
                </Form>
            </div>
        );
    }
}

export default UpdateBook;