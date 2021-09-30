import { Component } from 'react';
import { Landing } from './auth/index'
import { Navbar } from './components/Index'
import './styling/App.css'
import {User} from './Types/User'
import {Redirect} from 'react-router-dom'



type State = {
  user: User,
  sessionToken: string
}

class App extends Component<{}, State> {
  state = {
    user: {
      id: 0,
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      isAdmin: false,
    },
    sessionToken: ""
  }


updateToken = (newToken: string) => {
  localStorage.setItem('token', newToken)
  this.setState({
    sessionToken: newToken
  })
}

setUser = (newUser: User) => {
  localStorage.setItem('admin', String(this.state.user.isAdmin))
  localStorage.setItem('userId', String(this.state.user.id))
  this.setState({
    user: newUser
  })
}

render() {

//   

  return (
    <div className="Nav-Styling">
      <Navbar
        token={this.state.sessionToken}
        updateToken={this.updateToken}
        newUser={this.state.user}

      />
      <div className="App">
        <Landing
          token={this.state.sessionToken}
          updateToken={this.updateToken}
          newUser={this.state.user}
          setUser={this.setUser}
        />
      </div>
    </div>

  );
}

}

export default App;