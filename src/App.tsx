import { Component } from 'react';
import { Landing } from './auth/index'


type Props = {}
type State = {
  sessionToken: string
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      sessionToken: ""
        }
  }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    this.setState({
      sessionToken: newToken
    })
    console.log(this.state.sessionToken)
  }

  //add ternary to determine view. If they have a session token, allow them to view profile...etc

  render() {
    return (

      <div>
      <Landing token={this.state.sessionToken} updateToken={this.updateToken}/>
      
        {/* insert ternary to determine if sessionToken is empty. If yes, show BookCreate, if no, show Login/Register */}
      </div>

    );
  }
} 

export default App;