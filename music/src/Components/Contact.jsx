import React from 'react';
import '../App.css';

const Contact = () => {
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
      Contact Page <br />{" "}
    </p>{" "}
  </div>
  <div className="mainbox">
    <div className="contactbox">
    <h2> Please Contact Me </h2>
    <br />
    <p />
    <form id="contactForm" className='contactform'>
      <label htmlFor="name"> Name: </label>
      <input type="text" name="name" id="name" /> <br />
      <label htmlFor="email"> Email: </label>
      <input type="text" name="email" id="email" /> <br />
      <label htmlFor="message"> Message: </label>
      <textarea id="message" name="message" defaultValue={""} />
      <br />
      <button type="submit"> Submit </button>
    </form>
    <br />
    <h2> Contact Information </h2>
    <br />
    <p> Email Address: healyj53@students.rowan.edu </p>
    </div>
  </div>
    </>
    </div>
  )
}

export default Contact;