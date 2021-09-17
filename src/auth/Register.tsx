import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

type Props = {
    token: string,
    updateToken(newToken: string): void,
    fname: string,
    lname: string,
    email: string,
    username: string,
    password: string,
    setUsername(newUsername: string): void,
    setPassword(newPassword: string): void,
    setFname(newFname: string): void,
    setLname(newLname: string): void,
    setEmail(newEmail: string): void,
    setPassword(newPassword: string): void

}


class Register extends Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            user: {
                fname: this.props.fname,
                lname: this.props.lname,
                email: this.props.email,
                username: this.props.username,
                password: this.props.password
            }
        })

        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    fname: this.props.fname,
                    lname: this.props.lname,
                    email: this.props.email,
                    username: this.props.username,
                    password: this.props.password
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
                //call function that routes to my profile
            })
            .catch(err => console.log(err))
    }


    render() {
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
                            onChange={e => this.props.setFname(e.target.value)} />
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
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" check>I agree to be a responsible member of the Dewey Collective.</Label>
                    </FormGroup>
                    <Button>Join Dewey</Button>
                </Form>
            </div>
        )
    }
}




export default Register;