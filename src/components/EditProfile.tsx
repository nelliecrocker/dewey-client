import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import '../styling/CreateProfile.css'
import { User } from '../Types/User'



type Props = {
    token: string,
    newUser: User

}

type Profile = {
    id: number | null,
    preferredGenre: string,
    favoriteCharacter: string,
    collectionSize: string
}

type State = {
    userProfile: Profile,
    navRedirect: boolean
}

class EditProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            userProfile: {
                id: 0,
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: false
        }
    }

    onCreate = (e: React.FormEvent) => {
        e.preventDefault()
        this.setState({
            userProfile: {
                id: 0,
                preferredGenre: "",
                favoriteCharacter: "",
                collectionSize: ""
            },
            navRedirect: true

        })

        fetch(`http://localhost:3000/profile/create/${this.props.newUser.id} `, {
            method: 'PUT',
            body: JSON.stringify({
                UserProfile: {
                    id: this.state.userProfile.id,
                    preferredGenre: this.state.userProfile.preferredGenre,
                    favoriteCharacter: this.state.userProfile.favoriteCharacter,
                    collectionSize: this.state.userProfile.collectionSize
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

    onUpdate = (e: React.FormEvent) => {
        e.preventDefault()
                fetch(`http://localhost:3000/profile/update/${this.props.newUser.id} `, {
            method: 'PUT',
            body: JSON.stringify({
                UserProfile: {
                    id: this.state.userProfile.id,
                    preferredGenre: this.state.userProfile.preferredGenre,
                    favoriteCharacter: this.state.userProfile.favoriteCharacter,
                    collectionSize: this.state.userProfile.collectionSize
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
                    Preferred Genre: {this.state.userProfile.preferredGenre}


                </div>
                {this.state.userProfile.id === null ?
                    <Form className="Form-Style" onSubmit={this.onCreate}>
                        {/* <Label>Create Your Profile</Label> */}
                        <FormGroup>
                            <Label for="preferredGenre"></Label>
                            <Input className="Form-Input" type="text"
                                name="preferredGenre"
                                id="preferredGenre"
                                placeholder="Preferred Genre"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, preferredGenre: e.target.value } })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="favoriteCharacter"></Label>
                            <Input className="Form-Input" type="text"
                                name="favoriteCharacter"
                                id="favoriteCharacter"
                                placeholder="Favorite Character"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, favoriteCharacter: e.target.value } })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="collectionSize"></Label>
                            <Input className="Form-Input" type="text"
                                name="collectionSize"
                                id="collectionSize"
                                placeholder="Collection Size"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, collectionSize: e.target.value } })} />
                        </FormGroup>
                        <Button className="Btn-login" >Update  Profile</Button>
                        {navRedirect && (<Redirect to='/user/profile' />)}
                    </Form>
                    :
                    <Form className="Form-Style" onSubmit={this.onUpdate}>
                        {/* <Label>Create Your Profile</Label> */}
                        <FormGroup>
                            <Label for="preferredGenre"></Label>
                            <Input className="Form-Input" type="text"
                                name="preferredGenre"
                                id="preferredGenre"
                                placeholder="Preferred Genre"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, preferredGenre: e.target.value } })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="favoriteCharacter"></Label>
                            <Input className="Form-Input" type="text"
                                name="favoriteCharacter"
                                id="favoriteCharacter"
                                placeholder="Favorite Character"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, favoriteCharacter: e.target.value } })} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="collectionSize"></Label>
                            <Input className="Form-Input" type="text"
                                name="collectionSize"
                                id="collectionSize"
                                placeholder="Collection Size"
                                onChange={(e) => this.setState({ userProfile: { ...this.state.userProfile, collectionSize: e.target.value } })} />
                        </FormGroup>
                        <Button className="Btn-login" >Update Profile</Button>
                        {navRedirect && (<Redirect to='/user/profile' />)}
                    </Form>
                }
            </div>
        );
    }
}


export default EditProfile;