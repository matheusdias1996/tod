import React from 'react'

import './style.css'

const ActionButton = ({ children, onClick, small }) => (
  <div className={'action-button ' + (small ? 'small' : '')} onClick={ onClick }>{ children }</div>
)

export default ActionButton
