import React from 'react';
import '../App.css';

const Contact = () => {
  const handleContact = async (event) => {
  event.preventDefault();
const formData = new FormData(event.target);
let name = formData.get("name");
let email = formData.get("email");
let message = document.getElementById("message");
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (name == "" || email == "" || message.value == "")
{
    alert("Error: Forms left blank.");
}
else if (containsNumber(name))
{
    alert("Error: Name has a number.");
}
else if (!re.test(email))
{
  alert("Error: Invalid email.");
}
else{
    alert("Thank you for getting in contact. I will reply whenever I have a chance.");
}
  };
  function containsNumber(str) {
    return /[0-9]/.test(str);
  };
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
    <form onSubmit={handleContact} id="contactForm" className='contactform' >
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
    <h2> Other Contact Information </h2>
    <p> Email Address: healyj53@students.rowan.edu </p>
    </div>
  </div>
    </>
    </div>
  )
}

export default Contact;