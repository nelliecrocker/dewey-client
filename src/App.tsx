import { Component } from 'react';
import { Landing } from './auth/index'
import { Navbar } from './components/Index'
import './styling/App.css'


type Props = {}

type State = {
  user: {
    id: number,
    fname: string,
    lname: string,
    email: string,
    username: string,
    password: string,
    isAdmin: boolean
  },
  sessionToken: string
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      user: {
        id: 0,
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: "",
        isAdmin: false
      },
      sessionToken: ""
    }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    })
  }

  render() {
    return (
      <div className="Nav-Styling">
        <Navbar
          token={this.state.sessionToken}
          updateToken={this.updateToken}
          
          // isAdmin={this.state.user.isAdmin}
          

        />
        <div className="App">
          <Landing
            token={this.state.sessionToken}
            updateToken={this.updateToken}
            userId={this.state.user.id}

            fname={this.state.user.fname}
            lname={this.state.user.lname}
            email={this.state.user.email}
            username={this.state.user.username}
            password={this.state.user.password}
            isAdmin={this.state.user.isAdmin}
             />
        </div>
      </div>

    );
  }
}

export default App;