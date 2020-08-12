import { connect } from 'react-redux'

import { confirmTokenRequest, resendTokenRequest, updateFormField } from '../../actions'
import ConfirmPage from './view'

const mapStateToProps = state => ({
  email: state.forms.confirm.email,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  confirmToken: token => {
    dispatch(confirmTokenRequest(token))
  },
  resendToken: email => {
    dispatch(resendTokenRequest(email))
  },
  updateForm: value => {
    dispatch(updateFormField({ formField: 'email', formId: 'confirm', value }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPage)
