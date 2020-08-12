import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../Button'
import TextInput from '../TextInput'
import './style.css'

const ChangePasswordPage = ({ form, changePassword, match, updateForm }) => (
  <div className="change-password-page">
    <h4>Password Reset</h4>
    <p>Please, insert your new password below.</p>
    <form onSubmit={(e) => {
      e.preventDefault()
      changePassword(form.password, form.confirmPassword, match.params.token)
    }}>
      <TextInput
        onChange={(e) => { updateForm('password', e.target.value) }}
        placeholder="Password"
        type="password"
        value={form.password}
      />
      <TextInput
        onChange={(e) => { updateForm('confirmPassword', e.target.value) }}
        placeholder="Confirm password"
        type="password"
        value={form.confirmPassword}
      />
      <input className="hidden" type="submit" />
      <div className="button-container">
        <Button onClick={() => { changePassword(form.password, form.confirmPassword, match.params.token) }}>Submit</Button>
      </div>
    </form>
  </div>
)

export default withRouter(ChangePasswordPage)
