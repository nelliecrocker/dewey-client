import { Component } from 'react'
import { Login, Register } from './index'
import { CreateBook, Profile, Navbar, Home, Bookshelf } from '../components/Index'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

type Props = {
    token: string,
    updateToken(newToken: string): void,
}
type State = {
    // user
    fname: string,
    lname: string,
    email: string,
    username: string,
    password: string,
    sessionToken: string
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
            //book
            title: "",
            author: "",
            genre: "",
            cover: "",
            sharedWith: "",
            sharedDate: ""
        }
    }

    // updateToken = (newToken: string) => {
    //     localStorage.setItem('token', newToken)
    //     this.setState({
    //         sessionToken: newToken
    //     })
    //     console.log(this.state.sessionToken)
    // }

    

    render() {
        return (
            // add router
            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>

                    <Route exact path="/user/register" component={() => <Register
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        // fname={this.state.fname}
                        // lname={this.state.lname}
                        // email={this.state.email}
                        // username={this.state.username}
                        // password={this.state.password}
                        // setUsername={this.setUsername}
                        // setFname={this.setFname}
                        // setLname={this.setLname}
                        // setEmail={this.setEmail}
                        // setPassword={this.setPassword}
                    />}></Route>

                    <Route exact path="/user/login" component={() => <Login
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                    // fname={this.state.fname}
                    // lname={this.state.lname}
                    // email={this.state.email}
                    // username={this.state.username}
                    // password={this.state.password}
                    // setUsername={this.setUsername}
                    // setPassword={this.setPassword}
                    />}>
                        </Route>


                    <Route exact path="/user/profile" component={() => <Profile
                    token={this.props.token}
                    updateToken={this.props.updateToken}
                    // title={this.state.title}
                    // author={this.state.author}
                    // genre={this.state.genre}
                    // cover={this.state.cover}
                    // sharedWith={this.state.sharedWith}
                    // sharedDate={this.state.sharedDate}
                    // setTitle={this.setTitle}
                    // setAuthor={this.setAuthor}
                    // setGenre={this.setGenre}
                    // setCover={this.setCover}
                    // setSharedWith={this.setSharedWith}
                    // setSharedDate={this.setSharedDate}
                    />}>
                    </Route>

                    <Route exact path="/book/create" component={() => <CreateBook
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        // title={this.state.title}
                        // author={this.state.author}
                        // genre={this.state.genre}
                        // cover={this.state.cover}
                        // sharedWith={this.state.sharedWith}
                        // sharedDate={this.state.sharedDate}
                        // setTitle={this.setTitle}
                        // setAuthor={this.setAuthor}
                        // setGenre={this.setGenre}
                        // setCover={this.setCover}
                        // setSharedWith={this.setSharedWith}
                        // setSharedDate={this.setSharedDate} 
                        />}>
                    </Route>

                    <Route exact path="/book/bookshelf" component={() => <Bookshelf
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        // title={this.state.title}
                        // author={this.state.author}
                        // genre={this.state.genre}
                        // cover={this.state.cover}
                        // sharedWith={this.state.sharedWith}
                        // sharedDate={this.state.sharedDate}
                        // setTitle={this.setTitle}
                        // setAuthor={this.setAuthor}
                        // setGenre={this.setGenre}
                        // setCover={this.setCover}
                        // setSharedWith={this.setSharedWith}
                        // setSharedDate={this.setSharedDate} 
                        />}>
                    </Route>

                    <Redirect to="/" />

                </Switch>
            </div >
        )
    }
    // user helper functions
    // setUsername = (newUsername: string) => {
    //     this.setState({ username: newUsername })
    // }
    // setFname = (newFname: string) => {
    //     this.setState({ fname: newFname })
    // }
    // setLname = (newLname: string) => {
    //     this.setState({ lname: newLname })
    // }
    // setEmail = (newEmail: string) => {
    //     this.setState({ email: newEmail })
    // }
    // setPassword = (newPassword: string) => {
    //     this.setState({ password: newPassword })
    // }

    // books helper functions
    // setTitle = (newTitle: string) => {
    //     this.setState({ title: newTitle })
    // }
    // setAuthor = (newAuthor: string) => {
    //     this.setState({ author: newAuthor })
    // }
    // setGenre = (newGenre: string) => {
    //     this.setState({ genre: newGenre })
    // }
    // setCover = (newCover: string) => {
    //     this.setState({ cover: newCover })
    // }
    // setSharedWith = (newSharedWith: string) => {
    //     this.setState({ sharedWith: newSharedWith })
    // }
    // setSharedDate = (newSharedDate: string) => {
    //     this.setState({ sharedDate: newSharedDate })
    // }
}

export default Landing