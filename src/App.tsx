import { Component } from 'react';
import { Landing } from './auth/index'
import { Navbar } from './components/Index'
import './styling/App.css'


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
        <Navbar token={this.state.sessionToken}
          updateToken={this.updateToken}
        />
        <div className="App">
          <Landing token={this.state.sessionToken} updateToken={this.updateToken} />
        </div>
      </div>

    );
  }
}

export default App;