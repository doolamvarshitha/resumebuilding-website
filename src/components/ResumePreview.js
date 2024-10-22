import React from 'react'

const ResumePreview = ({data}) => {
  return (
    <div className='p-4 border border-gray-300 rounded'>
      <h2 className='text-xl font-bold'>{data.name}</h2>
      <p>{data.email}</p>
      <h3 className='font-semibold'>Experience</h3>
      <p>{data.experience}</p>
      <h3 className='font-semibold'>Education</h3>
      <p>{data.education}</p>
      <h3 className='font-semibold'>Skills</h3>
      <p>{data.skills}</p>
    </div>
  )
}

export default ResumePreview
