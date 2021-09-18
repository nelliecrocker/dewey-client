import { Component } from 'react'
import { Login, Register } from '../auth/index'
import { CreateBook, Profile } from '../components/Index'

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
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: "",
        }
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>Landing Page</h1>
                        <h2>Login</h2>
                        <Login
                            token={this.props.token}
                            updateToken={this.props.updateToken}
                            fname={this.state.fname}
                            lname={this.state.lname}
                            email={this.state.email}
                            username={this.state.username}
                            password={this.state.password}
                            setUsername={this.setUsername}
                            setPassword={this.setPassword}
                        />
                        <h2>Register</h2>
                        <Register
                            token={this.props.token}
                            updateToken={this.props.updateToken}
                            fname={this.state.fname}
                            lname={this.state.lname}
                            email={this.state.email}
                            username={this.state.username}
                            password={this.state.password}
                            setUsername={this.setUsername}
                            setFname={this.setFname}
                            setLname={this.setLname}
                            setEmail={this.setEmail}
                            setPassword={this.setPassword}
                        />

                        <h2>CreateBook</h2>
                        <CreateBook 
                            token={this.props.token}
                            updateToken={this.props.updateToken}
                            title={this.state.title}
                            author={this.state.author}
                            genre={this.state.genre}
                            cover={this.state.cover}
                            sharedWith={this.state.sharedWith}
                            sharedDate={this.state.sharedDate}
                            setTitle={this.setTitle}
                            setAuthor={this.setAuthor}
                            setGenre={this.setGenre}
                            setCover={this.setCover}
                            setSharedWith={this.setSharedWith}
                            setSharedDate={this.setSharedDate}
                            />
                        <h2>MyProfile</h2>
                        <Profile />
                    </div>
                </div>
            </div>
        )
    }
// user helper functions
    setUsername = (newUsername: string) => {
        this.setState({ username: newUsername })
    }
    setFname = (newFname: string) => {
        this.setState({ fname: newFname })
    }
    setLname = (newLname: string) => {
        this.setState({ lname: newLname })
    }
    setEmail = (newEmail: string) => {
        this.setState({ email: newEmail })
    }
    setPassword = (newPassword: string) => {
        this.setState({ password: newPassword })
    }

    // books helper functions
    setTitle = (newTitle: string) => {
        this.setState({ title: newTitle })
    }
    setAuthor = (newAuthor: string) => {
        this.setState({ author: newAuthor })
    }
    setGenre = (newGenre: string) => {
        this.setState({ genre: newGenre })
    }
    setCover = (newCover: string) => {
        this.setState({ cover: newCover })
    }
    setSharedWith = (newSharedWith: string) => {
        this.setState({ sharedWith: newSharedWith })
    }
    setSharedDate = (newSharedDate: string) => {
        this.setState({ sharedDate: newSharedDate })
    }
}

export default Landing