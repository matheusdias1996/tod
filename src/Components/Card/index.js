import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Card = ({ children, href }) => {
  if (href) {
    return <Link className="card" to={ href }>{ children }</Link>
  }

  return (
    <div className="card">
      { children }
    </div>
  )
}

export default Card
