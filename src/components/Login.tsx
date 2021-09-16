import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';



type Props = {};
type State = {
    username: string,
    password: string,
}

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    // navigateToMyProfile() {
    //     Router.push("/profile")
    // }

    //     fetch("http://localhost:3000/user/login", {
    //         method: 'POST',
    //         body: JSON.stringify({ user: { username: username, password: password } }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         })
    //     }).then(
    //         (response) => response.json()
    //     ).then((data) => {
    //         console.log(data)
    //         props.updateToken(data.sessionToken)
    //         this.navigateToMyProfile()
    //     }).catch(err => console.log(err))
    // }


    render() {
        return (
            <div>
                <Form>
                    <Label>Login</Label>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="harrylovesginny731" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="HorcruxCrshr" />
                        </FormGroup>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default Login;