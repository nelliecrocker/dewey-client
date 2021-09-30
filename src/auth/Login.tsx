import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'
import '../styling/Login.css'
import Dewey from '../images/Dewey.svg'
import {User} from '../Types/User'



type Props = {
    token: string,
    updateToken(newToken: string): void,
    setUser(newUser: User): void
    newUser: User
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
            this.props.setUser(data.user)
            this.props.updateToken(data.sessionToken)

        }).catch(err => console.log(err))
    }

    render() {
        //! this.props.newUser.isAdmin -- follow this pattern to dig into data
        if (this.props.newUser.isAdmin === true && this.props.token !== "") {
            return <Redirect to='/admin' />
        } else if (this.props.token !== "") {
            return <Redirect to='/user/profile' />
        }

        return (
            <div>
                <div >
                    <img src={Dewey} className='Logo' />
                </div>
                <Form className='Form-Style' onSubmit={this.onSubmit}>
                    <Col md={6}>
                        <FormGroup>
                            <Label className='Label-Style' for="username"></Label>
                            <Input className='Form-Input' type="text" name="username" id="username" placeholder="username"
                                onChange={e => this.setState({ username: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label className='Label-Style' for="password"></Label>
                            <Input className='Form-Input' type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                onChange={e => this.setState({ password: e.target.value })} />
                        </FormGroup>
                    </Col>
                    <Button className="Btn-login" variant="contained">Login</Button>
                    <div >
                    <Link className='Link-Style' to='/user/register'>Join Dewey</Link>
                    </div>
                </Form>

            </div>
        );
    }
}

export default Login;