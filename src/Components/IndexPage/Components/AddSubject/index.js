import { connect } from 'react-redux'

import { addSubjectRequest, closeModal, openModal, resetForm, updateFormField } from '../../../../actions'
import AddSubject from './view'

const mapStateToProps = state => ({
  form: state.forms.addSubject,
  isModalOpened: state.modals.addSubject,
  role: state.me ? state.me.role : null,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  addSubject: (description, name, token) => {
    dispatch(addSubjectRequest({ description, name, token }))
  },
  closeModal: () => {
    dispatch(closeModal('addSubject'))
    dispatch(resetForm('addSubject'))
  },
  openModal: () => {
    dispatch(openModal('addSubject'))
  },
  updateForm: (formField, value) => {
    dispatch(updateFormField({ formField, formId: 'addSubject', value }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSubject)
