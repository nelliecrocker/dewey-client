import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'


type Props = {
    token: string,
    updateToken(newToken: string): void,
}

type State = {
    book: {
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    }
}

class CreateBook extends Component<Props, State> {
    state = {
        book: {
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
                title: this.state.book.title,
                author: this.state.book.author,
                genre: this.state.book.genre,
                cover: this.state.book.cover,
                sharedWith: this.state.book.sharedWith,
                sharedDate: this.state.book.sharedDate
            }
        })

        fetch("http://localhost:3000/book/create", {
            method: 'POST',
            body: JSON.stringify({
                book: {
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
                "Authorization": `Bearer ${this.props.token}`
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    render() {
        //redirects to login if no token, my profile after submit with token

        if (this.props.token !== "") {
            return <Redirect to="/user/profile" />
        } else if (this.props.token === "") {
            return <Redirect to='/user/login' />
        }

        return (

            <div>
                <Form onSubmit={this.onSubmit}>
                    <Label>Create a Book</Label>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text"
                            name="title"
                            id="title"
                            placeholder="Harry Potter and the Sorcerer's Stone"
                            onChange={(e) => this.setState({book: {...this.state.book, title: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text"
                            name="author"
                            id="author"
                            placeholder="J.K. Rowling"
                            onChange={(e) => this.setState({book: {...this.state.book, author: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre">Genre</Label>
                        <Input type="text"
                            name="genre"
                            id="genre"
                            placeholder="Fiction"
                            onChange={(e) => this.setState({book: {...this.state.book, genre: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cover">cover</Label>
                        <Input type="text"
                            name="cover"
                            id="cover"
                            placeholder="Cover Image"
                            onChange={(e) => this.setState({book: {...this.state.book, cover: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="sharedWith">Shared With</Label>
                        <Input type="text"
                            name="sharedWith"
                            id="sharedWith"
                            placeholder="Username"
                            onChange={(e) => this.setState({book: {...this.state.book, sharedWith: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="sharedDate">Shared Date</Label>
                        <Input type="text"
                            name="sharedDate"
                            id="sharedDate"
                            placeholder="Date"
                            onChange={(e) => this.setState({book: {...this.state.book, sharedDate: e.target.value}})} />
                    </FormGroup>
                    <Button>Add to your bookshelf</Button>
                    
                </Form>
            </div>
        );
    }
}

export default CreateBook;