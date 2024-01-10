import React from 'react'

const Button = () => {
  return (
    <>
    <div className='center-button'>
        <div className='compress-btn'>
            <button type="button" class="btn btn-outline-dark">Compress</button>
        </div>
        <div className='decompress-btn'>
            <button type="button" class="btn btn-outline-dark">Decompress</button>
        </div>
    </div>
    </>
  )
}

export default Button