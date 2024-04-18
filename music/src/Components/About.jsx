import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="App">
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Index</title>
    <div className="topnav">
    <p> Rowan Web Programming </p>
    <a href="contact">Contact</a>
    <a href="about">About</a>
    <a href="home">Home</a>
  </div>
  <div className="hero">
    {" "}
    <p className="statement">
      {" "}
      Team #02 <br />
      <hr className="heroline"></hr>
      About Page <br />{" "}
    </p>{" "}
  </div>
  <div className="mainbox">
    <div className="aboutbox">
    <h2 className="descheader"> Used Technologies </h2>
    <p className="about"> The main technologies used during the creation of this project include:</p> 
    <br /> <br />
    <p className="tech">
    React: Used as the main framework for the frontend <br />
    Docker: Used to containerize the entire project <br />
    MongoDB: Used as a database to store resources <br />
    Express: Used as the main framework for the backend
    </p>
    </div>
  </div>
    </>
    </div>
  )
}

export default About;