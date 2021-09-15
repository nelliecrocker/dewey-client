import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
import './components.css';



class Register extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron">
                    <Form>
                        <Label>Register</Label>
                        <FormGroup>
                            <Label for="fname">First Name</Label>
                            <Input type="text" name="fname" id="fname" placeholder="Harry" />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lname">Last Name</Label>
                                    <Input type="text" name="lname" id="lname" placeholder="Potter" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email">Email Address</Label>
                                    <Input type="email" name="email" id="email" placeholder="hpotter@ministryofmagic.gov" />
                                </FormGroup>
                            </Col>
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

                            <Col md={2}>
                                <FormGroup>
                                    <Label for="zipcode">Zip Code</Label>
                                    <Input type="text" name="zipcode" id="zipcode" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>I agree to be a responsible member of the Dewey Collective.</Label>
                        </FormGroup>
                        <Button>Join Dewey</Button>
                    </Form>
                </Jumbotron>
            </div>
        )
    }
}




export default Register;