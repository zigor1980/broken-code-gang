import React, { Component } from 'react';
import {Avatar} from '../Avatar/Avatar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  const ava = {
      "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
      "modifier": "avatar-s"
  };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Avatar image={ava} />
      </div>
    );
  }
}

export default App;
