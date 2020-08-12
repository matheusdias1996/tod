import { connect } from 'react-redux'

import { closeClassRequest, deleteClassRequest, fillForm, getSubjectRequest, openModal, scheduleClassRequest, updateClassRequest } from '../../actions'
import SubjectPage from './view'

const mapStateToProps = (state) => ({
  classDate: state.classDate,
  loggedIn: state.token !== null,
  role: state.me ? state.me.role : null,
  subject: state.subject,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  closeClass: (classDate, form, subjectId, token) => {
    dispatch(closeClassRequest({
      date: classDate,
      npsURL: form.npsURL,
      students: form.students,
      subjectId,
      token
    }))
  },
  deleteClass: (classDate, subjectId, token) => {
    dispatch(deleteClassRequest({
      date: classDate,
      subjectId,
      token,
    }))
  },
  fillForm: form => {
    dispatch(fillForm({ formId: 'class', form }))
  },
  getSubject: (id, token) => {
    dispatch(getSubjectRequest({ id, token }))
  },
  openModal: modalId => {
    dispatch(openModal(modalId))
  },
  scheduleClass: (form, subjectId, token) => {
    dispatch(scheduleClassRequest({
      date: form.date,
      room: form.room,
      duration: form.duration,
      subjectId,
      students: form.students,
      teachers: form.teachers, token
    }))
  },
  updateClass: (classDate, form, subjectId, token) => {
    dispatch(updateClassRequest({
      newDate: form.date,
      oldDate: classDate,
      room: form.room,
      students:form.students,
      subjectId,
      teachers: form.teachers,
      token,
    }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage)
