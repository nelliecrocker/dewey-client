import { Component } from 'react';
import { Portal } from './auth/index'
import { Home } from './components/Index'


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
        <Home />
        <Portal />
      </div>

    );
  }
}

export default App;