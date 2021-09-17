import { Component } from 'react'
import { Login, Register } from '../auth/index'

type Props = {
    token: string,
    updateToken(newToken: string): void
}
type State = {
        fname: string,
        lname: string,
        email: string,
        username: string,
        password: string,
    }

class Landing extends Component<Props, State> {
constructor(props: Props){
    super(props)
    this.state = {
            fname: "",
            lname: "",
            email: "",
            username: "",
            password: ""
        }
}
    render() {
        return (
            <div>
                <div>
                    <div>
                        {/* <Login
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        fname={this.state.fname}
                        lname={this.state.lname}
                        email={this.state.email}
                        username={this.state.username}
                        password={this.state.password}
                        setUsername = {this.setUsername}
                        setPassword = {this.setPassword}
                        /> */}

                        <Register
                        token={this.props.token}
                        updateToken={this.props.updateToken}
                        fname={this.state.fname}
                        lname={this.state.lname}
                        email={this.state.email}
                        username={this.state.username}
                        password={this.state.password}
                        setUsername = {this.setUsername}
                        setFname = {this.setFname}
                        setLname = {this.setLname}
                        setEmail = {this.setEmail}
                        setPassword = {this.setPassword}
                        />
                        Landing Page
                    </div>
                </div>
            </div>
        )
    }

    setUsername = (newUsername: string) => {
        this.setState({username: newUsername})
    }
    setFname = (newFname: string) => {
        this.setState({fname: newFname})
    }
    setLname = (newLname: string) => {
        this.setState({lname: newLname})
    }
    setEmail = (newEmail: string) => {
        this.setState({email: newEmail})
    }
    setPassword = (newPassword: string) => {
        this.setState({password: newPassword})
    }
}

export default Landing