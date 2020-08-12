import { connect } from 'react-redux'

import { closeModal, loginRequest, registerRequest, resetForm, updateFormField } from '../../actions'
import AuthenticationPage from './view'

const mapStateToProps = state => ({
  isModalOpened: state.modals.authentication,
  loggedIn: state.token !== null,
  login: state.forms.login,
  register: state.forms.register,
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => {
    dispatch(closeModal('authentication'))
    dispatch(resetForm('login'))
    dispatch(resetForm('register'))
  },
  loginRequest: (email, password) => {
    dispatch(loginRequest({ email, password }))
  },
  registerRequest: (email, name, password, confirmPassword) => {
    dispatch(registerRequest({ email, name, password, confirmPassword }))
  },
  updateForm: (formId, formField, value) => {
    dispatch(updateFormField({ formField, formId, value }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationPage)
