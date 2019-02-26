import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './components/dialog';
import WelcomeDialog from './components/welcomeDialog';
import MyButton from './components/mybutton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dialog title="Hola" contents="lorem ipsum"></Dialog>
        <WelcomeDialog contents="lorem ipsum 2"></WelcomeDialog>
        <WelcomeDialog contents="lorem ipsum 3"></WelcomeDialog>
        <WelcomeDialog contents="lorem ipsum 5"></WelcomeDialog>
      </div>
    );
  }
}

export default App;
