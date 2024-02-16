import React from 'react'

const InputBox = ({ onSearchChange }) => {
  return (
    <div className='input-box' >
      <input type="text" placeholder='Enter any word' onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  )
}

export default InputBox