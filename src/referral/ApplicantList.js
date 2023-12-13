import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_BASE_URL } from '../constants'
import { request } from '../util/APIUtils'
import { DataGrid } from '@mui/x-data-grid'

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const json = request({
      url: `${API_BASE_URL}/applicants/${id}`,
      method: 'GET'
    })

    json.then(response => {
      setApplicants(response)
    })
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'resume',
      headerName: 'Resume',
      width: 250,
      renderCell: (params) => (
        <a
          href={`data:application/pdf;base64,${params.value}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      )
    }
  ]

  const rows = applicants.map(applicant => ({
    id: '1',
    name: applicant.name,
    email: applicant.email,
    resume: applicant.resume,
    skills: applicant.skills
  }))

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  )
}

export default ApplicantList
