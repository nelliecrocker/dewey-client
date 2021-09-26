import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import '../styling/CreateProfile.css'



type Props = {
    token: string,
    updateToken(newToken: string): void
    userIdProps: number

}

type State = {
    UserProfile: {
        preferredGenre: string,
        favoriteCharacter: string,
        collectionSize: string
    },
    navRedirect: boolean
}

class EditProfile extends Component<Props, State> {
    state = {
        UserProfile: {
            preferredGenre: "",
            favoriteCharacter: "",
            collectionSize: ""
        },
        navRedirect: false
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            UserProfile: {
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: true

        })

        fetch(`http://localhost:3000/profile/update/${this.props.userIdProps} `, {
            method: 'PUT',
            body: JSON.stringify({
                userProfile: {
                    // preferredGenre: this.props.preferredGenre,
                    // favoriteCharacter: this.props.favoriteCharacter,
                    // collectionSize: this.props.collectionSize
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token} `
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
                    <Button className="Btn-login" >Update  Profile</Button>
                    {navRedirect && (<Redirect to='/user/profile' />)}
                </Form>
            </div>
        );
    }
}

export default EditProfile;