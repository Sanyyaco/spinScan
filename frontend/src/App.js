import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    const response = await fetch('/api');
    const body = await response.json();
    this.setState({hello: body});
  }

  render() {
    const {hello} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Response</h2>
            </div>
          </header>
//          <body>
//           <h2>{hello.hello Nur}</h2>
//          </body>
        </div>
    );
  }
}
export default App;
