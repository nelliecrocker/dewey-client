import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styling/CreateProfile.css'
import {User} from '../Types/User'


type Props = {
    token: string,
    newUser: User,
    setProfile(newProfile: UserProfile): void
}

type State = {
    profile: UserProfile
}

type UserProfile = {
    preferredGenre: string,
    favoriteCharacter: string,
    collectionSize: string
}


class CreateProfile extends Component<Props, State> {
    state = {
        profile: {
            preferredGenre: "",
            favoriteCharacter: "",
            collectionSize: ""
        },
        // userId: {
        //     id: this.props.newUser.id
        // }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            profile: {
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            }
            
        })
        
        const userIdx = localStorage.getItem('userId')
        console.log("userId=",userIdx)

        fetch(`http://localhost:3000/profile/create/${userIdx}`, {
            method: 'POST',
            body: JSON.stringify({
                profile: {
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

        return (
            <div>
                <Form className = "Form-Style" onSubmit={this.onSubmit}>
                    {/* <Label>Create Your Profile</Label> */}
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
                </Form>
                
            </div>
        );
    }
}

export default CreateProfile;