import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../constants'
import { request } from '../../util/APIUtils'
import './Profile.css'

const Profile = (props) => {
  const [Referrals, setReferrals] = useState([])
  // const logo = "https://logo.clearbit.com/";

  useEffect(() => {
    const json = request({
      url: API_BASE_URL + '/referrals',
      method: 'GET'

    })

    json.then(response => {
      setReferrals(response.filter(referral => referral.userid === props.currentUser.id))
      console.log(Referrals)
    })
      .catch((error) => {
        console.error('Error fetching referrals:', error)
      })
  }, [])

  return (
        <div className="profile-container">

            <div className="profile-info">
                <div className="profile-avatar">
                    {
                        props.currentUser.imageUrl
                          ? (
                            <img src={props.currentUser.imageUrl} alt={props.currentUser.name} />
                            )
                          : (
                            <div className="text-avatar">
                                <span>{props.currentUser.name && props.currentUser.name[0]}</span>
                            </div>
                            )
                    }
                </div>
                <div className="profile-name">
                    <h2>{props.currentUser.name}</h2>
                    <p className="profile-email">{props.currentUser.email}</p>
                </div>

            </div>
            <div className='created-referral'>
                <ul>
                    {Referrals.map(item => (

                        <li key={item.userid}>

                            <span>View Applicants at your post </span>

                            <Link to={'/applicants/' + item.id}>
                                <button type="radio" className="apply-radio" name="view-applicants">View Applicants</button>
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}
export default Profile
