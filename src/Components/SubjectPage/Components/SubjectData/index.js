import { connect } from 'react-redux'

import SubjectData from './view'

import {
  cancelEditingSubject,
  deleteSubjectRequest,
  openModal,
  startEditingSubject,
  updateFormField,
  updateSubjectRequest
} from '../../../../actions'

const mapStateToProps = state => ({
  editing: state.editingSubject,
  form: state.forms.editSubject,
  role: state.me ? state.me.role : null,
  token: state.token,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  cancelEditing: () => {
    dispatch(cancelEditingSubject())
  },
  deleteSubject: token => {
    dispatch(deleteSubjectRequest({ id: ownProps.subject._id, token }))
  },
  openModal: () => {
    dispatch(openModal('removeSubject'))
  },
  startEditing: () => {
    dispatch(startEditingSubject(ownProps.subject._id))
  },
  updateForm: (formField, value) => {
    dispatch(updateFormField({ formId: 'editSubject', formField, value }))
  },
  updateSubject: (description, name, token) => {
    dispatch(updateSubjectRequest({ description, name, subjectId: ownProps.subject._id, token }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectData)
