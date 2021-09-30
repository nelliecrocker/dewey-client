import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import '../styling/CreateBook.css'


type Props = {
    token: string,
}

type State = {
    book: {
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    },
    navRedirect: boolean
}

class CreateBook extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            book: {
                title: "",
                author: "",
                genre: "",
                cover: "",
                sharedWith: "",
                sharedDate: ""
            },
            navRedirect: false
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
                sharedDate: this.state.book.sharedDate,
            },
            navRedirect: true
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
       
        const { navRedirect } = this.state

        if (this.props.token === "") {
            return <Redirect to='/user/login' />
        }

        return (

            <div>
                <Form className="Form-Style" onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="title"></Label>
                        <Input className="Form-Input" type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            onChange={(e) => this.setState({ book: { ...this.state.book, title: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author"></Label>
                        <Input className="Form-Input" type="text"
                            name="author"
                            id="author"
                            placeholder="Author"
                            onChange={(e) => this.setState({ book: { ...this.state.book, author: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre"></Label>
                        <Input className="Form-Input" type="text"
                            name="genre"
                            id="genre"
                            placeholder="Genre"
                            onChange={(e) => this.setState({ book: { ...this.state.book, genre: e.target.value } })} />
                    </FormGroup>

                    {/* for use with book API */}
                    {/* <FormGroup>
                        <Label for="cover">cover</Label>
                        <Input type="text"
                            name="cover"
                            id="cover"
                            placeholder="Cover Image"
                            onChange={(e) => this.setState({book: {...this.state.book, cover: e.target.value}})} />
                    </FormGroup> */}


                    <Button className="Btn-login">Add</Button>
                    {navRedirect && (<Redirect to='/user/profile' />)}
                    <Link className="Link-Style" to='/user/profile'>View Bookshelf</Link>

                </Form>
            </div>
        );
    }
}

export default CreateBook;