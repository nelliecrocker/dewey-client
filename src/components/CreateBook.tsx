import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


type Props = {
    token: string,
    updateToken(newToken: string): void,
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string,
    setTitle(newTitle: string): void,
    setAuthor(newAuthor: string): void,
    setGenre(newGenre: string): void,
    setCover(newCover: string): void,
    setSharedWith(newSharedWith: string): void,
    setSharedDate(newSharedDate: string): void
}

class CreateBook extends Component<Props, {}> {
    // constructor(props: Props) {
    //     super(props)
    // }

    

    onSubmit = (e: React.FormEvent) => {

        e.preventDefault()
        this.setState({
            book: {
                title: this.props.title,
                author: this.props.author,
                genre: this.props.genre,
                cover: this.props.cover,
                sharedWith: this.props.sharedWith,
                sharedDate: this.props.sharedDate
            }
        })

        fetch("http://localhost:3000/book/create", {
            method: 'POST',
            body: JSON.stringify({
                book: {
                    title: this.props.title,
                    author: this.props.author,
                    genre: this.props.genre,
                    cover: this.props.cover,
                    sharedWith: this.props.sharedWith,
                    sharedDate: this.props.sharedDate
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
                //call function that routes to my profile
            })
            .catch(err => console.log(err))

    }
    render() {
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
                            onChange={e => this.props.setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text"
                            name="author"
                            id="author"
                            placeholder="J.K. Rowling"
                            onChange={e => this.props.setAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="genre">Genre</Label>
                        <Input type="text"
                            name="genre"
                            id="genre"
                            placeholder="Fiction"
                            onChange={e => this.props.setGenre(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cover">cover</Label>
                        <Input type="text"
                            name="cover"
                            id="cover"
                            placeholder="Cover Image"
                            onChange={e => this.props.setCover(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="sharedWith">Shared With</Label>
                        <Input type="text"
                            name="sharedWith"
                            id="sharedWith"
                            placeholder="Username"
                            onChange={e => this.props.setSharedWith(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="sharedDate">Shared Date</Label>
                        <Input type="text"
                            name="sharedDate"
                            id="sharedDate"
                            placeholder="Date"
                            onChange={e => this.props.setSharedDate(e.target.value)} />
                    </FormGroup>
                    <Button>Add to your bookshelf</Button>
                </Form>
            </div>
        );
    }
}

export default CreateBook;