import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AppHeader from '../common/AppHeader'
import AppFooter from '../common/AppFooter'
import Home from '../home/Home'
import Login from '../user/login/Login'
import Signup from '../user/signup/Signup'
import Profile from '../user/profile/Profile'
import ReferralPost from '../referral/ReferralPost'
import ReferralList from '../referral/ReferralList'
import ApplicantList from '../referral/ApplicantList'
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler'
import NotFound from '../common/NotFound'
import LoadingIndicator from '../common/LoadingIndicator'
import { getCurrentUser } from '../util/APIUtils'
import { ACCESS_TOKEN } from '../constants'
import ApplicantForm from '../referral/ApplicantForm'

function App () {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    loadCurrentlyLoggedInUser()
  }, [])

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response)
        console.log(response)
        setAuthenticated(true)
        setLoading(false)
      }).catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    setAuthenticated(false)
    setCurrentUser(null)
    navigate('/')
  }

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <div className="app">
      <div className="app-top-box">
        <AppHeader authenticated={authenticated} onLogout={handleLogout} />
      </div>
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setAuthenticated={setAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route
            path="/profile"
            element={<Profile authenticated={authenticated} currentUser={currentUser} />}
          />
          <Route path="/create-referral" element={<ReferralPost authenticated={authenticated} currentUser={currentUser} />} />
          <Route path="/referrals" element={<ReferralList authenticated={authenticated} currentUser={currentUser} />} />
          <Route path="/apply/:id" element={<ApplicantForm authenticated={authenticated} currentUser={currentUser} />} />
          <Route path="/applicants/:id" element={<ApplicantList authenticated={authenticated} currentUser={currentUser} />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  )
}

export default App
