import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Login.css'
import { GOOGLE_AUTH_URL } from '../../constants'
import googleLogo from '../../img/google-logo.png'

const Login = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.error) {
      const timeout = setTimeout(() => {
        navigate(location.pathname, { state: {} })
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [location, navigate])

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login to Refer.io</h1>
        <SocialLogin />
        <span className="signup-link">Don&apos;t have an account? <Link to="/Signup">Sign in!</Link></span>
      </div>
    </div>
  )
}

function SocialLogin () {
  return (
    <div className="social-login">
      <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
        <img src={googleLogo} alt="Google" /> Log in with Google
      </a>
    </div>
  )
}

export default Login
