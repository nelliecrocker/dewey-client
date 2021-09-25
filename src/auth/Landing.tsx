import { Component } from 'react'
import { Login, Register } from './index'
import { CreateBook, Profile, AdminView, CreateProfile, Home, Bookshelf, UpdateBook } from '../components/Index'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void
}


type State = {
    // user
    fname: string,
    lname: string,
    email: string,
    username: string,
    password: string,
    sessionToken: string,
    isAdmin: boolean
    // books
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            username: "",
            password: "",
            sessionToken: "",
            isAdmin: false,
            //book
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"><Home token={this.props.token}
                        updateToken={this.props.updateToken} /></Route>

                    <Route exact path="/user/register" component={() => <Register
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        
                    />}></Route>

                    <Route exact path="/user/login" component={() => <Login
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        isAdmin={this.state.isAdmin}
                    
                    />}>
                        </Route>


                    <Route exact path="/user/profile" component={() => <Profile
                    token={this.props.token}
                    updateToken={this.props.updateToken}
                    title={this.state.title}
                    
                    />}>
                    </Route>

                    <Route exact path="/user/profile/create" component={() => <CreateProfile
                    token={this.props.token}
                    updateToken={this.props.updateToken}
                    
                    />}>

                    </Route>

                    <Route exact path="/book/create" component={() => <CreateBook
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        
                        />}>
                    </Route>
                    
                    <Route exact path='/book/update/' component={() => 
                    <UpdateBook token={this.props.token}
                        updateToken={this.props.updateToken}/> }>
                            </Route>

                    <Route exact path="/book/bookshelf" component={() => <Bookshelf
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        
                        />}>
                    </Route>

                    <Route exact path="/admin" component={() => <AdminView
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        
                        />}>
                    </Route>

                    <Redirect to="/" />

                </Switch>
            </div >
        )
    }
}

export default Landing