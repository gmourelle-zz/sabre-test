import React, { Component } from 'react';
import PageContainer from '../containers/PageContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       Football Player Finder      
        <div className="App__container">
       
        <PageContainer />
        </div>
      </div>
    );
  }
}

export default App;
