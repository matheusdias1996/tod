import React from 'react'

import './style.css'

const Button = ({ children, onClick }) => (
  <div className="button" onClick={ onClick }>{ children }</div>
)

export default Button
