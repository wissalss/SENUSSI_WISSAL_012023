import React from 'react'
import "./Login.css"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3001/api/v1/user/login"
    fetch (url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email:email, password:password
      })
    })
    .then((response)=> response.json())
    .then((data)=> {
      if (data?.body?.token) {
        if (rememberMe) {
          localStorage.setItem("token",data.body.token)
          sessionStorage.removeItem("token")
        } else {
          sessionStorage.setItem("token",data.body.token)
          localStorage.removeItem("token")
        }
        navigate("/profile")
      }
    })

  }

  return (
    <div className='LoginPage'>

      <form onSubmit={handleSubmit} className ="login-form">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div className="input-remember">
            <input type="checkbox" id="remember-me"  className='remember-me' checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)}/>
            <label htmlFor="remember-me" className="remember-me">Remember me</label>
        </div>
        <button type="submit">Log In</button>
      </form>

    </div>
  )
}

export default Login
