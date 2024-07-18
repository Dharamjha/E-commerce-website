import React from 'react'
import './DescriptionBox.css'

const DescriptopnBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box fade">
            Reviews(122)
          </div>
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, optio.</p>
        </div>
    </div>
  )
}

export default DescriptopnBox