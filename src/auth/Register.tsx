import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void,
}

type State = {
    user: {
        fname: string,
        lname: string,
        email: string,
        username: string,
        password: string
    }
}

class Register extends Component<Props, State> {
    state = {
        user: {
            fname: "",
            lname: "",
            email: "",
            username: "",
            password: ""
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            user: {
                fname: this.state.user.fname,
                lname: this.state.user.lname,
                email: this.state.user.email,
                username: this.state.user.username,
                password: this.state.user.password
            }
        })

        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    fname: this.state.user.fname,
                    lname: this.state.user.lname,
                    email: this.state.user.email,
                    username: this.state.user.username,
                    password: this.state.user.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.props.updateToken(data.sessionToken)
            })
            .catch(err => console.log(err))
    }


    render() {
        //redirects to my profile after registering

        if (this.props.token !== "") {
            return <Redirect to='/book/create' />
        }

        return (

            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Register</Label>
                    <FormGroup>
                        <Label for="fname">First Name</Label>
                        <Input type="text"
                            name="fname"
                            id="fname"
                            placeholder="Harry"
                            onChange={(e) => this.setState({user: {...this.state.user, fname: e.target.value}})} />
                    </FormGroup>
                    <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lname">Last Name</Label>
                                    <Input type="text"
                                        name="lname"
                                        id="lname"
                                        placeholder="Potter"
                                        onChange={(e) => this.setState({user: {...this.state.user, lname: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email">Email Address</Label>
                                    <Input type="email"
                                        name="email"
                                        id="email"
                                        placeholder="hpotter@ministryofmagic.gov"
                                        onChange={(e) => this.setState({user: {...this.state.user, email: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text"
                                        name="username"
                                        id="username"
                                        placeholder="harrylovesginny731"
                                        onChange={(e) => this.setState({user: {...this.state.user, username: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password"
                                        name="password"
                                        id="password"
                                        placeholder="HorcruxCrshr"
                                        onChange={(e) => this.setState({user: {...this.state.user, password: e.target.value}})} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>Join Dewey</Button>
                </Form>
            </div>
        )
    }
}





export default Register;