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


  render() {
    return (

      <div>
        <Landing token={this.state.sessionToken} updateToken={this.updateToken}/>
      </div>

    );
  }
}

export default App;