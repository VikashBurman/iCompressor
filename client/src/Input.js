import React from 'react'

const Input = () => {
  return (
    <>
        <div className='input-div'>
            <div className='input-heading'>
                <h3>Original Text:</h3>
            </div>
                <div className='input-field'>
                        <textarea id = 'text-input' placeholder='Input//'></textarea>
                </div>
        </div>
        
    </>
  )
}

export default Input