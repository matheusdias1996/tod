import React from 'react'

import ActionButton from '../../../ActionButton'
import Button from '../../../Button'
import Modal from '../../../Modal'
import TextInput from '../../../TextInput'
import './style.css'

const AddSubject = ({ addSubject, closeModal, form, isModalOpened, openModal, role, token, updateForm }) => {
  if (role !== 'admin') {
    return null
  }

  return (
    <div className="add-subject">
      <ActionButton onClick={openModal}><i className="fas fa-plus"></i></ActionButton>
      <Modal onClose={closeModal} open={isModalOpened}>
        <h2>Add Subject</h2>
        <form className="add-subject-form" onSubmit={e => {
          e.preventDefault()
          addSubject(form.description, form.name, token)
        }}>
          <TextInput
            onChange={e => {updateForm('name', e.target.value)}}
            placeholder="Name"
            value={form.name}
          />
          <TextInput
            onChange={e => {updateForm('description', e.target.value)}}
            placeholder="Description"
            textarea
            value={form.description}
          />
          <div className="add-subject-footer">
            <Button onClick={() => {addSubject(form.description, form.name, token)}} >Add</Button>
          </div>
          <input className="hidden" type="submit" />
        </form>
      </Modal>
    </div>
  )
}

export default AddSubject
