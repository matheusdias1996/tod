import React from 'react'

import './style.css'

const Modal = ({ children, onClose, open }) => {
  if (!open) {
    return null
  }

  return (
    <div className="modal">
      <div className="close" onClick={onClose}><i className="fas fa-times"></i></div>
      <div className="content">
        { children }
      </div>
    </div>
  )
}

export default Modal
