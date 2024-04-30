import React, {useState} from 'react';
import '../App.css';


const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
  const handleAccountCreation = async (event) => {
    event.preventDefault();
    try {
        window.location.pathname = "/home";
      const response = await fetch(`http://localhost:3000/createAccount`,
      {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
      throw new Error(`Error:
      ${response.statusText}`);
      }
      const { token } = await response.json();
localStorage.setItem('jwt', token);

}
catch (error) {
setLoginError('Failed to create new account.');
console.error('Account creation failed:', error);
}
};
  return (
    <div className="App">
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Index</title>
  <div className="loginbox">
    <div className="create">
        <h2 className="loginHeader"> Create an Account </h2>
    <form onSubmit={handleAccountCreation} className='loginform'>
      <label htmlFor="email"> Email: </label>
      <input className="emailForm" type="email" name="email" id="email" required /> <br />
      <label className="passwordText" htmlFor="password" > Password: </label>
      <input className="passwordForm" type="password" name="password" id="password" required />
      <br />
      <button type="submit"> Create Account </button>
    </form>
    </div>
  </div>
    </>
    </div>
  )
}

export default CreateAccount;