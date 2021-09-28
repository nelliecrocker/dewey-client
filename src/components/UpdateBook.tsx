import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'
import { Bookshelf } from './Index'

type Props = {
    token: string,
    updateToken(newToken: string): void,
    //! needs incoming prop from Bookshelf that contains book id
    book: Book

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
    navRedirect: boolean,
    sharedWith: string,
    sharedDate: string
}

class UpdateBook extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            navRedirect: false,
            sharedWith: this.props.book.sharedWith,
            sharedDate: this.props.book.sharedDate
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            navRedirect: true
        })

        fetch(`http://localhost:3000/book/update/${this.props.book.id} `, {
            method: 'PUT',
            body: JSON.stringify({
                book: {
                    title: this.props.book.title,
                    author: this.props.book.author,
                    genre: this.props.book.genre,
                    cover: this.props.book.cover,
                    sharedWith: this.state.sharedWith,
                    sharedDate: this.state.sharedDate
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
        const { navRedirect } = this.state

        return (
            <div className="Form-Style">
                <Form
                    onSubmit={this.onSubmit}
                >
                    <FormGroup>
                        <Input className="Form-Input" type="text"
                            name="sharedWith"
                            id="sharedWith"
                            value={this.state.sharedWith}
                            placeholder={this.state.sharedWith}
                            onChange={(e) => this.setState({ sharedWith: e.target.value })} />
                        <Label></Label>
                        <Input className="Form-Input" type="text"
                            name="sharedDate"
                            id="sharedDate"
                            value={this.state.sharedDate}
                            placeholder={this.state.sharedDate}
                            onChange={(e) => this.setState({ sharedDate: e.target.value })} />
                    </FormGroup>
                    <Button className="Btn-login">Lend</Button>
                    {navRedirect && (<Redirect to='/user/profile' />)}
                </Form>
            </div>
        );
    }
}

export default UpdateBook;