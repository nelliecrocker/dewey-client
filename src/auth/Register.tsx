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

    // setUsername = (newUsername: string) => {
    //     this.setState({ username: newUsername })
    // }
    // setFname = (newFname: string) => {
    //     this.setState({ fname: newFname })
    // }
    // setLname = (newLname: string) => {
    //     this.setState({ lname: newLname })
    // }
    // setEmail = (newEmail: string) => {
    //     this.setState({ email: newEmail })
    // }
    // setPassword = (newPassword: string) => {
    //     this.setState({ password: newPassword })
    // }

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
        //redirects to create book after registering

        if (this.props.token !== "") {
            return <Redirect to='/create/book' />
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
                            onChange={e => this.setState(e.target.value)} />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lname">Last Name</Label>
                                <Input type="text"
                                    name="lname"
                                    id="lname"
                                    placeholder="Potter"
                                    onChange={e => this.props.setLname(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="email">Email Address</Label>
                                <Input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="hpotter@ministryofmagic.gov"
                                    onChange={e => this.props.setEmail(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="harrylovesginny731"
                                    onChange={e => this.props.setUsername(e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="HorcruxCrshr"
                                    onChange={e => this.props.setPassword(e.target.value)} />
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