import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div>
        <img className='absolute w-60 bg-gradient-to-b from-black p-4 z-10' src={NETFLIX_LOGO} alt="netflix-logo"/>
    </div>
  )
}

export default Header