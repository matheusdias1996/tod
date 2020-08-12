import { connect } from 'react-redux'

import { changePasswordRequest, updateFormField } from '../../actions'
import ChangePasswordPage from './view'

const mapStateToProps = state => ({
  form: state.forms.changePassword,
})

const mapDispatchProps = dispatch => ({
  changePassword: ( password, confirmPassword, token ) => {
    dispatch(changePasswordRequest({ password, confirmPassword, token }))
  },
  updateForm: ( formField, value ) => {
    dispatch(updateFormField({ formId: 'changePassword', formField, value }))
  },
})

export default connect(mapStateToProps, mapDispatchProps)(ChangePasswordPage)
