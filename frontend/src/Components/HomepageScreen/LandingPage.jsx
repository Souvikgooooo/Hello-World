import React from 'react'
import blob from '../../assets/blobanimation.svg'

function LandingPage() { 
  return ( 
    <div className="landingContainer container">
    <img src={blob} alt="" className='blob_a blob1' />
    <img src={blob} alt="" className='blob_a blob2' />
        <div className="landingInfo">
            <h1>Hello World</h1>
            <p>Code, Collaborate, Create</p>
        </div>
    </div>
  )
}

export default LandingPage