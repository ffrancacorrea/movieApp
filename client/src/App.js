import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  
  state = {
    api_key: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ api_key: res.api_key }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Header api_key={this.state.api_key}/>
      </div>
    );
  }
}

export default App;
