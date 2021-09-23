import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type Props = {
    token: string,
    updateToken(newToken: string): void,
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
            id: 0,
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
                    // title: this.state.book.title,
                    // author: this.state.book.author,
                    // genre: this.state.book.genre,
                    // cover: this.state.book.cover,
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

        if (this.props.token === "") {
            return <Redirect to="/user/login" />
        }

        return (
            <div>
                <div>
                    {this.state.book.sharedWith === "" ?
                        <Form onSubmit={this.onSubmit}>
                            <Label>Lend Your Book</Label>
                            <FormGroup>
                                <Label for="sharedWith">Shared With</Label>
                                <Input type="text"
                                    name="title"
                                    id="title"
                                    value={this.state.book.sharedWith}
                                    onChange={(e) => this.setState({ book: { ...this.state.book, sharedWith: e.target.value } })} />
                            </FormGroup>
                            <Button>Mark as Borrowed</Button>
                        </Form>
                        : <Form onSubmit={this.onSubmit}>
                            <Label>Lend Your Book</Label>
                            <FormGroup>
                                <Label for="sharedWith">Shared With</Label>
                                <Input type="text"
                                    name="title"
                                    id="title"
                                    value={this.state.book.sharedWith}
                                    onChange={(e) => this.setState({ book: { ...this.state.book, sharedWith: "" } })} />
                            </FormGroup>
                            <Button>Mark as Returned</Button>
                        </Form>
                    }
                </div>
            </div>
        );
    }
}

export default UpdateBook;