import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import './style.css'

const App = ({
  closeModal,
  isModalOpened,
  loggedIn,
  login,
  loginRequest,
  register,
  registerRequest,
  updateForm,
}) => {
  if (loggedIn) {
    return <Redirect to="/index" />
  }

  return (
    <div className="authentication">
      <img className="cover" alt="cover" src="/images/Landing-page-2.png" />
      <Modal onClose={closeModal} open={isModalOpened}>
        <div className="authentication-modal-body">
          <form className="login" onSubmit={ e => {
            e.preventDefault()
            loginRequest(login.email, login.password)
          } }>
            <h3>Login</h3>
            <TextInput
              onChange={e => {updateForm('login', 'email', e.target.value)}}
              placeholder="E-mail"
              value={login.email}
            />
            <TextInput
              onChange={e => {updateForm('login', 'password', e.target.value)}}
              placeholder="Password"
              type="password"
              value={login.password}
            />
            <div className="small"><Link to="/forgotPassword" >Forgot your password?</Link></div>
            <input className="hidden" type="submit" />
          </form>
          <div className="separator"></div>
          <form className="register" onSubmit={ e => {
            e.preventDefault()
            registerRequest(register.email, register.name, register.password, register.confirmPassword)
          } }>
            <h3>Register</h3>
            <TextInput
              onChange={e => {updateForm('register', 'email', e.target.value)}}
              placeholder="E-mail"
              value={register.email}
            />
            <TextInput
              onChange={e => {updateForm('register', 'name', e.target.value)}}
              placeholder="Name"
              value={register.name}
            />
            <TextInput
              onChange={e => {updateForm('register', 'password', e.target.value)}}
              placeholder="Password"
              type="password"
              value={register.password}
            />
            <TextInput
              onChange={e => {updateForm('register', 'confirmPassword', e.target.value)}}
              placeholder="Confirm Password"
              type="password"
              value={register.confirmPassword}
            />
            <input className="hidden" type="submit" />
          </form>
        </div>
        <div className="authentication-modal-footer">
          <Button onClick={ () => { loginRequest(login.email, login.password) } }>Login</Button>
          <Button onClick={ () => { registerRequest(register.email, register.name, register.password, register.confirmPassword) } }>Register</Button>
        </div>
      </Modal>
    </div>
  )
}

export default App
