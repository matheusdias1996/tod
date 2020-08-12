import React from 'react'

import Button from '../Button'
import Modal from '../Modal'
import './style.css'

const ConfirmModal = ({ closeModal, modalOpen, onConfirm, text }) => (
  <div className="confirm-modal">
    <Modal onClose={closeModal} open={modalOpen}>
      <p>{ text }</p>
      <div className="button-container">
        <Button onClick={closeModal}>No</Button>
        <Button onClick={onConfirm}>Yes</Button>
      </div>
    </Modal>
  </div>
)

export default ConfirmModal
