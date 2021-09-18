import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';



type Props = {
    token: string,
    updateToken(newToken: string): void,
    fname: string,
    lname: string,
    email: string,
    username: string,
    password: string,
    setUsername(newUsername: string): void,
    setPassword(newPassword: string): void
};


class Login extends Component<Props, {}> {
    // constructor(props: Props) {
    //     super(props)
    // }


    componentDidMount() {
        //function to route to myprofile

    }


    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // insert function to route to myprofile

        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.props.username,
                    password: this.props.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.props.updateToken(data.sessionToken)
            // call function that routes to myprofile
        }).catch(err => console.log(err))
    }




    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Label>Login</Label>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="harrylovesginny731"
                            onChange = {e => this.props.setUsername(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password"
                            name="password"
                            id="password"
                            placeholder="HorcruxCrshr"
                            onChange = {e => this.props.setPassword(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Button>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;