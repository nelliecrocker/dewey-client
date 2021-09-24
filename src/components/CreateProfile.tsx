import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styling/CreateProfile.css'

type Props = {
    token: string,
    updateToken(newToken: string): void
}

type State = {
    UserProfile: {
        preferredGenre: string,
        favoriteCharacter: string,
        collectionSize: string
    }
}


class CreateProfile extends Component<Props, State> {
    state = {
        UserProfile: {
            preferredGenre: "",
            favoriteCharacter: "",
            collectionSize: ""
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            UserProfile: {
                preferredGenre: this.state.UserProfile.preferredGenre,
                favoriteCharacter: this.state.UserProfile.favoriteCharacter,
                collectionSize: this.state.UserProfile.collectionSize
            }
        })


        fetch("http://localhost:3000/profile/create", {
            method: 'POST',
            body: JSON.stringify({
                UserProfile: {
                    preferredGenre: this.state.UserProfile.preferredGenre,
                    favoriteCharacter: this.state.UserProfile.favoriteCharacter,
                    collectionSize: this.state.UserProfile.collectionSize
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
        // if the userId in the profile table is not empty, redirect to user/profile
        
        // if (this.state.UserProfile.UserId !== "") {
        //     return <Redirect to='/user/profile' />
        // }

        // <Redirect to='/user/profile/create' />

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
                            onChange={(e) => this.setState({ UserProfile: { ...this.state.UserProfile, preferredGenre: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="favoriteCharacter"></Label>
                        <Input className="Form-Input" type="text"
                            name="favoriteCharacter"
                            id="favoriteCharacter"
                            placeholder="Favorite Character"
                            onChange={(e) => this.setState({ UserProfile: { ...this.state.UserProfile, favoriteCharacter: e.target.value } })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="collectionSize"></Label>
                        <Input className="Form-Input" type="text"
                            name="collectionSize"
                            id="collectionSize"
                            placeholder="Collection Size"
                            onChange={(e) => this.setState({ UserProfile: { ...this.state.UserProfile, collectionSize: e.target.value } })} />
                    </FormGroup>
                    <Button className="Btn-login" >Update Your Profile</Button>
                </Form>
                <Link className="Link-Style" to="/book/create">Add a Book</Link>
            </div>
        );
    }
}

export default CreateProfile;