import React, { useState } from 'react';
import "./home.css";  // Ensure the CSS path is correct for your project structure

export default function Log() {
  // State to manage user inputs
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to manage which form is active
  const [activeForm, setActiveForm] = useState('login'); // Default to 'login'

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5009/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // handle response
    console.log(data);
  };

  return (
    <>
      <section className="forms-section">
        <h1 className="section-title">Welcome to Trader</h1>
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-login" onClick={() => setActiveForm('login')}>
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login" onSubmit={handleSubmit}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" value={email} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input id="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Login</button>
            </form>
          </div>
          
          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
            <button type="button" className="switcher switcher-signup" onClick={() => setActiveForm('signup')}>
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Confirm password</label>
                  <input id="signup-password-confirm" type="password" required />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">Continue</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
