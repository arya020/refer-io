import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_BASE_URL } from '../constants'
import { request } from '../util/APIUtils'
import './ApplicantForm.css'

const ApplicantForm = (props) => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    skills: '',
    jobId: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('resume', formData.resume) // Append the file object directly
      formDataToSend.append('skills', formData.skills)
      formDataToSend.append('jobId', formData.jobId)
      console.log(formData)
      request({
        url: `${API_BASE_URL}/apply/${id}`,
        method: 'POST',
        body: formDataToSend
      })
    } catch (error) {
      console.log(formData)
      console.log(error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleResumeUpload = (e) => {
    const file = e.target.files[0]
    setFormData((prevData) => ({
      ...prevData,
      resume: file
    }))
  }

  return (
    <div className='applicant-form-container'>
      <div className="container">
        <br />
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label> Applicant Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label>Applicant Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            pattern=".+@.+"
          />
          <br />
          <label> Resume (PDF only): </label>
          <input
            type="file"
            accept=".pdf"
            name="resume"
            onChange={handleResumeUpload}
          />
          <br />
          <label>
            JobId :
          </label>
          <input
            type="text"
            name="jobId"
            value={formData.jobId}
            onChange={handleInputChange}
          />
          <label>Skills: </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ApplicantForm
