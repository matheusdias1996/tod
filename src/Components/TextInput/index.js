import React from 'react'

import './style.css'

const TextInput = ({ className, disabled, icon, textarea, type, ...rest }) => {
  let iconEl = null;
  if (icon) {
    iconEl = (<i className={icon}></i>)
  }

  let input = (
    <input
      readOnly={disabled}
      type={ type || 'text'}
      { ...rest }
    />
  )

  if (textarea) {
    input = <textarea readOnly={disabled} rows={6} { ...rest }></textarea>
  }

  return (
    <div className={'textinput ' + className} >
      { input }
      { iconEl }
    </div>
  )
}
export default TextInput
