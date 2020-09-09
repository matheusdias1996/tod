import React from 'react'

import './style.css'

const SelectionList = ({ className, disabled, list, unit, placeholder, ...rest }) => {
  
  let select = (
    <select
      readOnly={disabled}
      { ...rest }
    >
      { list.map((value, index) => (
        <option className="selection-item" key={index} value={value}>
          {value} {unit}
        </option>
      ))}
    </select>
  )

  return (
    <div className={'selectionlist ' + className} >
      <label>{ placeholder }</label>
      { select }
    </div>
  )
}
export default SelectionList
