import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Bookshelf } from './Index'
import { Redirect } from 'react-router-dom'

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


class Profile extends Component<Props, State> {
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
        if (this.state.UserProfile.preferredGenre && this.state.UserProfile.favoriteCharacter && this.state.UserProfile.collectionSize !== "") {
            return <Redirect to='/user/profile' />
        }
            return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                    <Label>Create Your Profile</Label>
                    <FormGroup>
                        <Label for="preferredGenre">Preferred Genre</Label>
                        <Input type="text"
                            name="preferredGenre"
                            id="preferredGenre"
                            placeholder="Historical Fiction"
                            onChange={(e) => this.setState({UserProfile: {...this.state.UserProfile, preferredGenre: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="favoriteCharacter">Favorite Literary Character</Label>
                        <Input type="text"
                            name="favoriteCharacter"
                            id="favoriteCharacter"
                            placeholder="Historical Fiction"
                            onChange={(e) => this.setState({UserProfile: {...this.state.UserProfile, favoriteCharacter: e.target.value}})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="collectionSize">Collection Size</Label>
                        <Input type="text"
                            name="collectionSize"
                            id="collectionSize"
                            placeholder="Historical Fiction"
                            onChange={(e) => this.setState({UserProfile: {...this.state.UserProfile, collectionSize: e.target.value}})} />
                    </FormGroup>
                    <Button>Update Your Profile</Button>
                    </Form>
                    <Bookshelf token={this.props.token}
                        updateToken={this.props.updateToken} />
                </div>
            );
    }
}

export default Profile;

// this.props.token === "" ? <Redirect to='/' /> : localStorage.clear()