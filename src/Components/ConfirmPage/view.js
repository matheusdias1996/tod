import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import Button from '../Button'
import TextInput from '../TextInput'
import './style.css'

class ConfirmPage extends Component {
  componentDidMount() {
    const { confirmToken, match } = this.props
    confirmToken(match.params.token)
  }

  render() {
    const { email, history, resendToken, token, updateForm } = this.props

    if (token) {
      return <Redirect to="/index" />
    }

    return (
      <div className="confirm-page">
        <form onSubmit={e => {
          e.preventDefault()
          resendToken(email)
          history.push('/')
        }}>
          <h3>Token not found</h3>
          <p>Enter your e-mail and your token will be resent.</p>
          <TextInput
            onChange={e => {updateForm(e.target.value)}}
            placeholder="E-mail"
            value={email}
          />
          <input className="hidden" type="submit" />
          <div className="button-container">
            <Button onClick={ () => {
              resendToken(email)
              history.push('/')
            }}>
              Resend
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ConfirmPage)
