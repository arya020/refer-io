import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../constants'
import { request } from '../../util/APIUtils'
import './ProfileImage.css'

// Function to fetch image URL
async function fetchImage (userId) {
  try {
    const response = await request({
      url: API_BASE_URL + '/user/' + userId,
      method: 'GET'

    })
    return response.imageUrl
  } catch (error) {
    console.error('Error fetching image:', error)
    throw error
  }
}

// ProfileImage component
const ProfileImage = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await fetchImage(userId)
        setImageUrl(url)
      } catch (error) {
        // Handle errors if needed
      }
    }

    fetchData()
  }, [userId])

  return (
    <div>
      {imageUrl
        ? (
        <img className="profile" src={imageUrl} alt={`Profile of User ${userId}`} />
          )
        : (
        <p>Loading...</p>
          )}
    </div>
  )
}

export default ProfileImage
