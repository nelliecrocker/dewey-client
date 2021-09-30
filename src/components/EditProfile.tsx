import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import '../styling/CreateProfile.css'
import { User } from '../Types/User'



type Props = {
    token: string,
    newUser: User,
    setProfile(newProfile: UserProfile): void,
    updateProfile(newProfile: UserProfile): void
}

type UserProfile = {
    id: number | null,
    preferredGenre: string,
    favoriteCharacter: string,
    collectionSize: string
}

type State = {
    profile: UserProfile,
    navRedirect: boolean
}

class EditProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            profile: {
                id: 0,
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: false
        }
    }

    onUpdate = (e: React.FormEvent) => {
        e.preventDefault()
        const userIdLocal = localStorage.getItem('userId')
        fetch(`http://localhost:3000/profile/update/${userIdLocal} `, {
            method: 'PUT',
            body: JSON.stringify({
                UserProfile: {
                    id: this.state.profile.id,
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
            })
            .catch(err => console.log(err))

    }


    render() {
        const { navRedirect } = this.state

        return (
            <div>
                <div>
                    Preferred Genre: {this.state.profile.preferredGenre}
                    Favorite Character: {this.state.profile.favoriteCharacter}
                    Collection Size: {this.state.profile.collectionSize}
                </div>
                <Form className="Form-Style" onSubmit={this.onUpdate}>
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
                    <Button className="Btn-login" >Update</Button>
                    {navRedirect && (<Redirect to='/user/profile' />)}
                </Form>

            </div>
        );
    }
}


export default EditProfile;