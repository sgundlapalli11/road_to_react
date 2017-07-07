import React, { Component } from 'react';
import './App.css';

const person = {
  name: 'Sai',
  major: 'Computer Science'
}

class App extends Component {
  render() {
    const helloWorld = 'Welcome to world of React';

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h2>{person.name}</h2>
        <h2>{person.major}</h2>
      </div>
    );
  }
}

export default App;
