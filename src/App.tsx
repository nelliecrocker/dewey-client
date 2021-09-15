import React, { Component } from 'react';
import { Landing, Login, Register } from './components/Index'
import { Switch, Route, Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Landing />




      // <Router>
      //   <App>
      //     <Switch>
      //       <Route exact path="/" component={Landing} />
      //       <Route path="/login" component={Login} />
      //       <Route path="/register" component={Register} />
      //     </Switch>
      //   </App>
      // </Router>

    );
  }
}

export default App;