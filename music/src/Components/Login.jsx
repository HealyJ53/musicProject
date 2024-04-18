import React, {useState} from 'react';
import '../App.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:3000/login`,
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
  setLoginError('Failed to login. Please check your credentials.');
  console.error('Login failed:', error);
  }
  };
  const handleAccountCreation = async (event) => {
    event.preventDefault();
    try {
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
    <div className="login">
        <h2> Login </h2>
    <form onSubmit={handleLogin} className='loginform'>
      <label htmlFor="email"> Email: </label>
      <input className="emailForm" type="text" name="email" id="email" required /> <br />
      <label className="passwordText" htmlFor="password" > Password: </label>
      <input className="passwordForm" type="text" name="password" id="password" required />
      <br />
      <button type="submit"> Submit </button>
      <button type="submit" onSubmit={handleAccountCreation}> Create Account </button>
    </form>
    </div>
  </div>
    </>
    </div>
  )
}

export default Login;