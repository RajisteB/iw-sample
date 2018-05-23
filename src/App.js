import React, { Component } from 'react';
import Navigation from './components/navigation';
import Banner from './components/banner';
import Grid from './components/grid';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Banner />
        <Grid />
        <Footer />
      </main>
    );
  }
}

export default App;
