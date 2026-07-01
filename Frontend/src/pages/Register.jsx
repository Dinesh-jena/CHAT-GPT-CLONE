import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    axios.post('http://localhost:3000/api/auth/register', {
      email:email,
      fullName:{
        firstname:firstName,
        lastname:lastName
      },
      password:password
    }, { withCredentials: true })
    .then((response) => {
      navigate('/');
    })
    .catch((error) => {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    });
  }

  return (
    <div className="page-container">
      <h1>Register</h1>
      <p>Create your account with first name, last name, email, and password.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          First name
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First name"
            required
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Last name"
            required
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a password"
            required
          />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm your password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <p className="small-text">
        Already registered? <Link to="/login">Login here</Link>.
      </p>
    </div>
  )
}

export default Register
