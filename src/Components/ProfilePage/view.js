import React from 'react'
import { Redirect } from 'react-router'

import ActionButton from '../ActionButton'
import Button from '../Button'
import TextInput from '../TextInput'
import './style.css'

const ProfilePage = ({ cancelEditing, editing, form, loggedIn, me, startEditing, token, updateForm, updateUser }) => {
  if (!loggedIn) {
    return <Redirect to="/" />
  }

  if (!me) {
    return <div>Loading...</div>
  }

  return (
    <div className="profile-page">
      <h3 className="light-gray"><i className="fas fa-user-cog"></i> User settings</h3>
      <div className="centered">
        <div className="icon-container">
          <div className="icon">
            <i className="far fa-user fa-4x"></i>
          </div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          updateUser(form.email, me._id, form.name, form.password, form.confirmPassword, token)
        }}>
          <TextInput
            disabled={!editing}
            onChange={(e) => { updateForm('name', e.target.value) }}
            placeholder="Name"
            value={editing ? form.name : me.name}
          />
          <TextInput
            disabled={true}
            onChange={(e) => { updateForm('email', e.target.value) }}
            placeholder="E-mail"
            value={me.email}
          />
          <TextInput
            disabled={!editing}
            onChange={(e) => { updateForm('password', e.target.value) }}
            placeholder="Password"
            type="password"
            value={editing ? form.password : '********'}
          />
          { editing && (
            <TextInput
              onChange={(e) => { updateForm('confirmPassword', e.target.value) }}
              placeholder="Confirm password"
              type="password"
              value={form.confirmPassword}
            />
          )}
          <input className="hidden" type="submit" />
          <div className={'button-container ' + (editing && 'editing')} >
            { editing ? ([(
              <ActionButton key='cancel' small onClick={cancelEditing}>
                <i className="fas fa-times"></i>
              </ActionButton>
            ),(
              <ActionButton key='save' small onClick={() => {
                updateUser(form.email, me._id, form.name, form.password, form.confirmPassword, token)
              }} >
                <i className="fas fa-check"></i>
              </ActionButton>)
            ]) : (
              <Button onClick={startEditing}>Edit</Button>
            ) }
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
