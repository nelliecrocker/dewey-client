import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'
import '../styling/Register.css'
import Dewey from '../images/Dewey.svg'
import {User} from '../Types/User'



type Props = {
    token: string,
    updateToken(newToken: string): void,
    setUser(newUser: User): void

}

type State = {
    user: {
        fname: string,
        lname: string,
        email: string,
        username: string,
        password: string,
        isAdmin: boolean
    },
    userProfile: {
        preferredGenre: string,
        favoriteCharacter: string,
        collectionSize: string
    }
}

class Register extends Component<Props, State> {
    state = {
        user: {
            fname: "",
            lname: "",
            email: "",
            username: "",
            password: "",
            isAdmin: true,
        },
        userProfile: {
            preferredGenre: "",
            favoriteCharacter: "",
            collectionSize: ""
        }
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            user: {
                fname: "",
                lname: "",
                email: "",
                username: "",
                password: "",
                isAdmin: true
            },
            userProfile: {
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
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
                    password: this.state.user.password,
                    isAdmin: this.state.user.isAdmin
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
            return <Redirect to='/user/profile/create' />
        }

        return (

            <div>
                <div >
                    <img src={Dewey} className='Logo' />
                </div>
                <Form className="Form-Style" onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Label for="fname"></Label>
                        <Input className="Form-Input" type="text"
                            name="fname"
                            id="fname"
                            placeholder="First Name"
                            onChange={(e) => this.setState({user: {...this.state.user, fname: e.target.value}})} />
                    </FormGroup>
                    <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lname"></Label>
                                    <Input className="Form-Input" type="text"
                                        name="lname"
                                        id="lname"
                                        placeholder="Last Name"
                                        onChange={(e) => this.setState({user: {...this.state.user, lname: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="email"></Label>
                                    <Input className="Form-Input" type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        onChange={(e) => this.setState({user: {...this.state.user, email: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="username"></Label>
                                    <Input className="Form-Input" type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                        onChange={(e) => this.setState({user: {...this.state.user, username: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="password"></Label>
                                    <Input className="Form-Input" type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => this.setState({user: {...this.state.user, password: e.target.value}})} />
                                </FormGroup>
                            </Col>
                            
                        </Row>
                        <Button className="Btn-login">Join Dewey</Button>
                        <Link className='Link-Style' to='/user/login'>Already a Member</Link>
                </Form>
            </div>
        )
    }
}





export default Register;