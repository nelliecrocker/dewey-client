import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'
import '../styling/CreateProfile.css'
import {User} from '../Types/User'
import APIURL from '../helpers/environment'



type Props = {
    token: string,
    newUser: User,
    setProfile(newProfile: UserProfile): void
}

type State = {
    profile: UserProfile,
    navRedirect: boolean
}

type UserProfile = {
    id: number | null,
    preferredGenre: string,
    favoriteCharacter: string,
    collectionSize: string
}


class CreateProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            profile: {
                id: null,
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: false
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            profile: {
                id: null,
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: true
        })
        
        const userIdLocal = localStorage.getItem('userId')

        fetch(`${APIURL}/profile/create/${userIdLocal}`, {
            method: 'POST',
            body: JSON.stringify({
                UserProfile: {
                    preferredGenre: this.state.profile.preferredGenre,
                    favoriteCharacter: this.state.profile.favoriteCharacter,
                    collectionSize: this.state.profile.collectionSize
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token}`
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.props.setProfile(data.profile)
            })
            .catch(err => console.log(err))
    }


    render() {

        const { navRedirect } = this.state


        return (
            <div>
                <Form className = "Form-Style" onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="preferredGenre"></Label>
                        <Input className="Form-Input" type="text"
                            name="preferredGenre"
                            id="preferredGenre"
                            placeholder="Preferred Genre"
                            onChange={(e) => this.setState({ profile: { ...this.state.profile, preferredGenre: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="favoriteCharacter"></Label>
                        <Input className="Form-Input" type="text"
                            name="favoriteCharacter"
                            id="favoriteCharacter"
                            placeholder="Favorite Character"
                            onChange={(e) => this.setState({ profile: { ...this.state.profile, favoriteCharacter: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="collectionSize"></Label>
                        <Input className="Form-Input" type="text"
                            name="collectionSize"
                            id="collectionSize"
                            placeholder="Collection Size"
                            onChange={(e) => this.setState({ profile: { ...this.state.profile, collectionSize: e.target.value } })} />
                    </FormGroup>
                    <Button className="Btn-login">Create Profile</Button>
                    {navRedirect && (<Redirect to='/user/profile' />)}
                </Form>
                
            </div>
        );
    }
}

export default CreateProfile;