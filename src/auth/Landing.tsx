import { Component } from 'react'
import { Login, Register } from './index'
import { CreateBook, Profile, AdminView, CreateProfile, Home, Bookshelf, UpdateBook, EditProfile, Navbar } from '../components/Index'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void
}


type State = {
    User: {
        id: number,
        fname: string,
        lname: string,
        email: string,
        username: string,
        password: string,
        sessionToken: string,
        isAdmin: boolean
    },
    book: {
        id: number,
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    }
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            User: {
                id: 0,
                fname: "",
                lname: "",
                email: "",
                username: "",
                password: "",
                sessionToken: "",
                isAdmin: false
            },
            book: {
                id: 0,
                title: "",
                author: "",
                genre: "",
                cover: "",
                sharedWith: "",
                sharedDate: ""
            }
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    
                    <Route exact path="/"><Home
                        token={this.props.token}
                        updateToken={this.props.updateToken} /></Route>

                    <Route exact path="/user/register" component={() => <Register
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path="/user/login" component={() => <Login
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        isAdmin={this.state.User.isAdmin} />}></Route>

                    <Route exact path="/user/profile" component={() => <Profile
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path="/user/profile/create" component={() => <CreateProfile
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path="/user/profile/edit" component={() => <EditProfile
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        userIdProps={this.state.User.id} />}></Route>

                    <Route exact path="/book/create" component={() => <CreateBook
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path='/book/update/' component={() =>
                        <UpdateBook
                            token={this.props.token}
                            updateToken={this.props.updateToken}
                        // book={this.state.book}
                        />}></Route>

                    <Route exact path="/book/bookshelf" component={() => <Bookshelf
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                    // book={this.state.book}
                    />}></Route>

                    <Route exact path="/admin" component={() => <AdminView
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        isAdmin={this.state.User.isAdmin}
                        />}></Route>

                    <Redirect to="/" />

                </Switch>
            </div >
        )
    }
}

export default Landing