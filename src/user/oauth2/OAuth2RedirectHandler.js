import React, { useState, useEffect } from 'react'
import { ACCESS_TOKEN } from '../../constants'
import { Navigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'

function OAuth2RedirectHandler () {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)

  const [storedToken, setStoredToken] = useState(localStorage.getItem(ACCESS_TOKEN))

  const getUrlParameter = (name) => {
    return queryParams[name] || ''
  }

  const token = getUrlParameter('token')
  const error = getUrlParameter('error')

  useEffect(() => {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token)
      setStoredToken(token)
    }
  }, [token])

  if (storedToken) {
    localStorage.setItem(ACCESS_TOKEN, token)
    return <Navigate to={{ pathname: '/referrals', state: { from: location } }} />
  } else {
    return (
            <Navigate
                to={{
                  pathname: '/login',
                  state: {
                    from: location,
                    error
                  }
                }}
            />
    )
  }
}

export default OAuth2RedirectHandler
