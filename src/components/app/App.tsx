import * as React from 'react';
import Search from '../search/Search';
import './App.css';


import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
