import React, { Component } from 'react';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DevNull/>
      </div>
    );
  }
}

function DevNull() {
  return (
    <div className="app__content">These aren't the components you're looking for</div>
  );
}

export default App;
