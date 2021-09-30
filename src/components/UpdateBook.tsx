import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'

type Props = {
    token: string,
    book: Book,
    navUpdate: boolean,
    toggleUpdateNav(): void

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
    sharedWith: string,
    sharedDate: string,
}

class UpdateBook extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            sharedWith: this.props.book.sharedWith,
            sharedDate: this.props.book.sharedDate,
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()

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
            .then(() => {
                this.props.toggleUpdateNav()
            })
            .catch(err => console.log(err))
    }

    onReturn = () => {
        this.props.toggleUpdateNav()
    }

    render() {
        // if (this.props.token === "") {
        //     return (<Redirect to='/user/login' />)
        // }
        if (this.props.navUpdate === false) {
            return (<Redirect to='/user/profile' />)
        }

        return (
            <div className="Form-Style">
                <Form onSubmit={this.onSubmit}>
                    {this.state.sharedWith !== "" && this.state.sharedDate !== "" ? 'Currently shared with:' : null}
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
                                            
                        <Button className="Btn-login">Update</Button>
                    

                </Form>

            </div>
        );
    }
}

export default UpdateBook;
