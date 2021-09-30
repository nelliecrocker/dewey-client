import { Component } from 'react';
import { Landing } from './auth/index'
import { Navbar } from './components/Index'
import './styling/App.css'
import {User} from './Types/User'


// type Props = {}

type State = {
  // user: {
  //   id: number,
  //   fname: string,
  //   lname: string,
  //   email: string,
  //   username: string,
  //   password: string,
  //   isAdmin: boolean
  // },
  user: User,
  sessionToken: string
}

// type User = {
//   id: number | string,
//   fname: string,
//   lname: string,
//   email: string,
//   username: string,
//   password: string,
//   isAdmin: boolean
// }

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
  
  this.setState({
    user: newUser
  })
  localStorage.setItem('admin', String(this.state.user.isAdmin))
  localStorage.setItem('userId', String(this.state.user.id))
}

render() {
  console.log("User Info:", this.state.sessionToken)
  return (
    <div className="Nav-Styling">
      <Navbar
        token={this.state.sessionToken}
        updateToken={this.updateToken}

      />
      <div className="App">
        <Landing
          token={this.state.sessionToken}
          updateToken={this.updateToken}
          newUser={this.state.user}
          setUser={this.setUser}

          // userId={this.state.id}
          // fname={this.state.fname}
          // lname={this.state.lname}
          // email={this.state.email}
          // username={this.state.username}
          // password={this.state.password}
          // isAdmin={this.state.isAdmin}
        />
      </div>
    </div>

  );
}

}

export default App;