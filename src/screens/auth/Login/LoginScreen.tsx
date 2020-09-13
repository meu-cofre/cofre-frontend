import React from 'react';
import './LoginScreen.css';
import LoginSignIn from './components/LoginSignIn';
import LoginAbout from './components/LoginAbout';

function LoginScreen() {
    return (
      <div className="App">
        <div className="SignIn"><LoginSignIn/></div>
        <div className="About"><LoginAbout/></div>
      </div>
    );
  }
  
  export default LoginScreen;
  