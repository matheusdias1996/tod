import { connect } from 'react-redux'

import { resetPasswordRequest, updateFormField } from '../../actions'
import ForgotPasswordPage from './view'

const mapStateToProps = state => ({
  form: state.forms.forgotPassword,
})

const mapDispatchProps = dispatch => ({
  resetPassword: email => {
    dispatch(resetPasswordRequest(email))
  },
  updateForm: value => {
    dispatch(updateFormField({ formId: 'forgotPassword', formField: 'email', value }))
  },
})

export default connect(mapStateToProps, mapDispatchProps)(ForgotPasswordPage)
