import React from 'react'

import ActionButton from '../../../ActionButton'
import ConfirmModal from '../../../ConfirmModal'
import TextInput from '../../../TextInput'
import ShowInterest from '../ShowInterest'
import './style.css'

const SubjectData = ({
  cancelEditing,
  deleteSubject,
  editing,
  form,
  openModal,
  role,
  startEditing,
  subject,
  token,
  updateForm,
  updateSubject,
}) => {
  let name = (<h1 className="light-gray">{subject.name}</h1>)
  const crudButtons = (
    <div className="crud-button-container light-gray">
      <ActionButton small onClick={startEditing}><i className="fas fa-pencil-alt"></i></ActionButton>
      <ActionButton small onClick={openModal}><i className="fas fa-trash-alt"></i></ActionButton>
    </div>
  )
  let description = (<p>{subject.description}</p>)
  const editButtons = (
    <div className="edit-button-container">
      <ActionButton small onClick={cancelEditing}><i className="fas fa-times"></i></ActionButton>
      <ActionButton small onClick={() => { updateSubject(form.description, form.name, token) }}><i className="fas fa-check"></i></ActionButton>
    </div>
  )

  if (editing) {
    name = (
      <TextInput
        onChange={ (e) => { updateForm('name', e.target.value) } }
        placeholder="Name"
        value={ form.name }
      />
    )
    description = (
      <TextInput
        className="description"
        onChange={ (e) => { updateForm('description', e.target.value) } }
        placeholder="Description"
        textarea
        value={ form.description }
      />
    )
  }

  return (
    <div className="subject-data">
      <div className="name-container">
        { name }
        { role === 'admin' && !editing && crudButtons }
      </div>
      { description }
      <ShowInterest subject={subject} />
      { role === 'admin' && editing && editButtons }
      <ConfirmModal
        modalId="removeSubject"
        onConfirm={() => {deleteSubject(token)}}
        text={'Are you sure you want to delete: ' + subject.name + '?'}
      />
    </div>
  )
}

export default SubjectData
