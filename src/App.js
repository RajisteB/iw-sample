import React, { Component } from 'react';
import Navigation from './components/navigation';
import Banner from './components/banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Banner />
      </main>
    );
  }
}

export default App;
