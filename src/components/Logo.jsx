import React from 'react'
import { Link } from 'react-router-dom'
import {GiForkKnifeSpoon} from 'react-icons/gi'

function Logo() {
  return (
      <Link to={'./'}>
          <div className='logo'>
          <GiForkKnifeSpoon/>
        <h2 >Recipe</h2>
        </div>
    </Link>
  )
}

export default Logo