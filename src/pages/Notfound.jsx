
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="main">
    <div className='noF'>
      <h1>404 NOT FOUND</h1>
      <p>Your visited page not found. You may go home page.</p>
      <button className='logB' onClick={() => navigate('/')}>Back to home page</button>
    </div>
    </div>
  )
}

export default Notfound
