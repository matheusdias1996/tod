import { connect } from 'react-redux'

import { cancelEditingProfile, startEditingProfile, updateFormField, updateUserRequest } from '../../actions'
import ProfilePage from './view'

const mapStateToProps = state => ({
  editing: state.editingProfile,
  form: state.forms.profile,
  loggedIn: state.token !== null,
  me: state.me,
  token: state.token,
})

const mapDispatchProps = dispatch => ({
  cancelEditing: () => {
    dispatch(cancelEditingProfile())
  },
  startEditing: () => {
    dispatch(startEditingProfile())
  },
  updateForm: ( formField, value ) => {
    dispatch(updateFormField({ formId: 'profile', formField, value }))
  },
  updateUser: ( email, id, name, password, confirmPassword, token ) => {
    dispatch(updateUserRequest({ email, id, name, password, confirmPassword, token }))
  },
})

export default connect(mapStateToProps, mapDispatchProps)(ProfilePage)
