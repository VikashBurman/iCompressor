import React from 'react'

const Output = () => {
  return (
    <>
         <div className='output-div'>
            <div className='output-heading'>
                <h3>Summarized Text:</h3>
            </div>
                <div className='output-field'>
                        <textarea id = 'text-input' placeholder='output//'></textarea>
                </div>
          </div>  
    </>
  )
}

export default Output;