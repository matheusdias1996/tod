import { connect } from 'react-redux'

import { deleteSubjectRequest, getSubjectReceived, getSubjectsRequest, openModal } from '../../../../actions'
import SubjectsList from './view'

const mapStateToProps = state => ({
  role: state.me ? state.me.role : null,
  selectedSubject: state.subject,
  subjects: state.subjects,
  subjectsFilter: state.subjectsFilter,
  subjectsSort: state.subjectsSort,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  deleteSubject: (id, token) => {
    dispatch(deleteSubjectRequest({ id, token }))
  },
  getSubjects: token => {
    dispatch(getSubjectsRequest(token))
  },
  openModal: subject => {
    dispatch(getSubjectReceived({
      _id: subject._id,
      name: subject.name,
      students: [],
      teachers: [],
      trained: [],
    }))
    dispatch(openModal('removeSubject'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsList)
