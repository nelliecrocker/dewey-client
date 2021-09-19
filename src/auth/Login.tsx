import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'



type Props = {
    token: string,
    updateToken(newToken: string): void
    
};

type State = {
    username: string,
    password: string
}


class Login extends Component<Props, State> {
    state = {
        username: "",
        password: ""
    }


    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
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
            
        }).catch(err => console.log(err))
    }

    render() {
        //redirects to my profile after login
        if (this.props.token !== "") {
            return <Redirect to='/user/profile' />
        }

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Label>Login</Label>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="harrylovesginny731"
                            onChange = {e => this.setState({username: e.target.value})} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password"
                            name="password"
                            id="password"
                            placeholder="HorcruxCrshr"
                            onChange = {e => this.setState({password: e.target.value})} />
                        </FormGroup>
                    </Col>
                    <Button>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;