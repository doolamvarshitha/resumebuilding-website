import React, {useState} from 'react'

const ResumeForm = ({onChange}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    education: '',
    skills: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    onChange(formData) // Call parent function to update preview
  }

  return (
    <form className='p-4'>
      <input
        type='text'
        name='name'
        placeholder='Name'
        className='border p-2 mb-2 w-full'
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        className='border p-2 mb-2 w-full'
        onChange={handleChange}
      />
      <textarea
        name='experience'
        placeholder='Experience'
        className='border p-2 mb-2 w-full'
        onChange={handleChange}
      />
      <textarea
        name='education'
        placeholder='Education'
        className='border p-2 mb-2 w-full'
        onChange={handleChange}
      />
      <textarea
        name='skills'
        placeholder='Skills'
        className='border p-2 mb-2 w-full'
        onChange={handleChange}
      />
    </form>
  )
}

export default ResumeForm
