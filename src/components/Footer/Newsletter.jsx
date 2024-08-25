import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newslette</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" value="" placeholder='Enter your email Address'/>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
