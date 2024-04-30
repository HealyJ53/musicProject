import './App.css';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount'
{/*
    Author: Jack Healy
    School Name: healyj53
    Course: Web Programming CS04305
    Instructor: Marquise Pullen

    Honor Pledge: I pledge that this work is entirely my own
*/}

const App = () => {

  function renderPage () {
    if (window.location.pathname == '/home'){
    return (
    <>
    <Home />
    </>
    )
    }
    else if (window.location.pathname == '/about'){
      return (
    <>
    <About />
    </>
      )
    }
    else if (window.location.pathname == '/contact'){
      return (
      <>
      <Contact />
      </>
      )
    }
    else if (window.location.pathname == '/create'){
      return (
        <>
        <CreateAccount />
        </>
      )
    }
    else{
      return (
        <>
        <Login />
        </>
      )
    }
  }
  return (
    <div>
    {renderPage()}
    </div>
  );
}

export default App;
