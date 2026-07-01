import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true);
   
    axios.post("http://localhost:3000/api/auth/login", { email, password },
        {
          withCredentials: true,
        },
    ).then((res)=>{
      console.log(res);
       navigate('/');
    }).catch((err)=>{
      console.log(err);
      setError('Invalid email or password.')
    }).finally(() => {
      setLoading(false)
    });
   
      
    
  }

  return (
    <div className="page-container">
      <h1>Login</h1>
      <p>Enter your email and password to access your account.</p>
      <form className="auth-form" onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            required
          />
        </label>
        {error && <div className="form-error">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Login'}
        </button>
      </form>
      <p className="small-text">
        Don’t have an account? <Link to="/register">Create one</Link>.
      </p>
    </div>
  )
}

export default Login
