import { Component } from 'react'
import { Login, Register } from './index'
import { CreateBook, Profile, AdminView, CreateProfile, Home, Bookshelf, UpdateBook, EditProfile, DeleteBook } from '../components/Index'
import { Route, Switch, Redirect } from 'react-router-dom'
import {User} from '../Types/User'


type Props = {
    token: string,
    updateToken(newToken: string): void,
    newUser: User,
    setUser(newUser: User): void

}

type Book = {
    id: number | null,
    title: string,
    author: string,
    genre: string,
    cover: string,
    sharedWith: string,
    sharedDate: string
}

type State = {
    // user: {
    //     id: number,
    //     fname: string,
    //     lname: string,
    //     email: string,
    //     username: string,
    //     password: string,
    //     // sessionToken: string,
    //     isAdmin: boolean
    // },
    book: {
        id: number | null,
        title: string,
        author: string,
        genre: string,
        cover: string,
        sharedWith: string,
        sharedDate: string
    },
    navUpdate: boolean,
    navDelete: boolean
}

class Landing extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            
            //     userId: this.props.userId,
            //     fname: this.props.fname,
            //     lname: this.props.lname,
            //     email: this.props.email,
            //     username: this.props.username,
            //     password: this.props.password,
            //     // sessionToken: this.props.sessionToken,
            //     isAdmin: this.props.isAdmin
            // },
            book: {
                id: null,
                title: "",
                author: "",
                genre: "",
                cover: "",
                sharedWith: "",
                sharedDate: ""
            },
            navUpdate: false,
            navDelete: false
        }
    }

    // grabUser = (newUser: User) => {
    //     this.setState({
    //         user: newUser,
    //     })
    //     console.log(newUser)
    // }

    updateBook = (newBook: Book) => {
        this.setState({
            book: newBook,
            navUpdate: true
        })
        console.log(newBook)
    }

    deleteBook = (newBook: Book) => {
        this.setState({
            book: newBook,
            navDelete: !this.state.navDelete
        })
        console.log(newBook)
    }

    toggleDeleteNav = () => {
        this.setState({
            navDelete: !this.state.navDelete
        })
    }

    toggleUpdateNav = () => {
        this.setState({
            navUpdate: !this.state.navUpdate
        })
    }

    // navRedirectFunction = (navRedirect:boolean) => {
    //     this.setState({navRedirect: true})
    // }

    render() {
        return (
            <div>
                <Switch>

                    <Route exact path="/"><Home
                        token={this.props.token}
                        updateToken={this.props.updateToken} /></Route>

                    <Route exact path="/user/register" component={() => <Register
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        setUser={this.props.setUser}
                         />}></Route>

                    <Route exact path="/user/login" component={() => <Login
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        setUser={this.props.setUser}
                        newUser={this.props.newUser}
                        />}></Route>

                    <Route exact path="/user/profile" component={() => <Profile
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        updateBook={this.updateBook}
                        deleteBook={this.deleteBook}
                        navUpdate={this.state.navUpdate}
                        navDelete={this.state.navDelete}
                        bookId={this.state.book.id}
                        toggleDeleteNav={this.toggleDeleteNav}
                        toggleUpdateNav={this.toggleUpdateNav}
                        newUser={this.props.newUser}


                        
                    />}></Route>

                    <Route exact path="/user/profile/create" component={() => <CreateProfile
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path="/user/profile/edit" component={() => <EditProfile
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        newUser={this.props.newUser}
                         />}></Route>

                    <Route exact path="/book/create" component={() => <CreateBook
                        token={this.props.token}
                        updateToken={this.props.updateToken} />}></Route>

                    <Route exact path='/book/update' component={() =>
                        <UpdateBook
                            token={this.props.token}
                            updateToken={this.props.updateToken}
                            book={this.state.book}
                            navUpdate={this.state.navUpdate}
                            toggleUpdateNav={this.toggleUpdateNav}
                        />}></Route>

                    <Route exact path="/book/bookshelf" component={() => <Bookshelf
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        updateBook={this.updateBook}
                        deleteBook={this.deleteBook}
                        navUpdate={this.state.navUpdate}
                        navDelete={this.state.navDelete}
                        toggleDeleteNav={this.toggleDeleteNav}
                        toggleUpdateNav={this.toggleUpdateNav}


                        bookId={this.state.book.id}

                    />}></Route>

                    <Route exact path="/book/delete" component={() => <DeleteBook
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        book={this.state.book}
                        bookId={this.state.book.id}
                        navDelete={this.state.navDelete}
                        // deleteBook={this.deleteBook}
                        toggleDeleteNav={this.toggleDeleteNav}


                    />}></Route>

                    <Route exact path="/admin" component={() => <AdminView
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        newUser={this.props.newUser}
                        // grabUser={this.grabUser}
                    />}></Route>

                    <Redirect to="/" />

                </Switch>
            </div >
        )
    }
}

export default Landing