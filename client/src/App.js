import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  
  state = {
    //const poster_w500 = "https://image.tmdb.org/t/p/w500/"
    poster_w185: "https://image.tmdb.org/t/p/w185/",
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
        <Header api_key={this.state.api_key} poster_w185={this.state.poster_w185}/>
        <div className="wave_wrapper">
        <div className="wave"></div>
        </div>
      </div>
    );
  }
}

export default App;
