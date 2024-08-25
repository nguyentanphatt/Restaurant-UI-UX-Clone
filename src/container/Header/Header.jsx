import React from 'react'
import './Header.css'
import { images } from '../../constants'
import { SubHeading } from '../../components'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor"/>
        <h1 className='app__header-h1'>The Key To Find Dining</h1>
        <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button' >Explore Mores</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  )
}

export default Header
