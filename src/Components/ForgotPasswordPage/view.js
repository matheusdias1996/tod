import React from 'react'

import Button from '../Button'
import TextInput from '../TextInput'
import './style.css'

const ForgotPasswordPage = ({ form, resetPassword, updateForm }) => (
  <div className="forgot-password-page">
    <h4>Forgot your password?</h4>
    <p>Please, insert your e-mail below and we'll send you an e-mail with a link so you can reset your password.</p>
    <form onSubmit={(e) => {
      e.preventDefault()
      resetPassword(form.email)
    }}>
      <TextInput
        onChange={(e) => { updateForm(e.target.value) }}
        placeholder="E-mail"
        value={form.email}
      />
      <input className="hidden" type="submit" />
      <div className="button-container">
        <Button onClick={() => { resetPassword(form.email) }}>Submit</Button>
      </div>
    </form>
  </div>
)

export default ForgotPasswordPage
