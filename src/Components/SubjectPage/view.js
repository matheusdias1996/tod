import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import moment from 'moment'

import Button from '../Button'
import ClassModal from './Components/ClassModal'
import ConfirmModal from '../ConfirmModal'
import InterestedPeople from './Components/InterestedPeople'
import SubjectData from './Components/SubjectData'
import './style.css'

class SubjectPage extends Component {
  componentDidMount() {
    const { getSubject, loggedIn, match, token } = this.props

    if (loggedIn) {
      getSubject(match.params.id, token)
    }
  }

  render() {
    const { classDate, closeClass, deleteClass, fillForm, loggedIn, openModal, role, scheduleClass, subject, token, updateClass } = this.props

    if (!loggedIn) {
      return <Redirect to="/" />
    }

    if (!subject) {
      return <div>Loading...</div>
    }

    let adminButtons = null
    let adminModals = null
    if (role === 'admin') {
      adminButtons = (
        <div className="button-container">
          <Button onClick={ () => {
            fillForm({
              date: new Date(),
              students: subject.students
                .filter(student => !subject.users[student].studentDate)
                .reduce((acc, student) => {
                  acc[student] = false
                  return acc
                }, {}),
              teachers: subject.teachers
                .reduce((acc, teacher) => {
                  acc[teacher] = false
                  return acc
                }, {}),
            })
            openModal('addClass')
          }}>Schedule New Class</Button>
        </div>
      )
      adminModals = (
        <div className="modal-container">
          <ClassModal
            modalId="addClass"
            onSave={ form => { scheduleClass(form, subject._id, token)} }
            scheduleType="new"
            title="Schedule a new class"
          />
          <ClassModal
            modalId="editClass"
            onSave={ form => { updateClass(classDate, form, subject._id, token) } }
            scheduleType="edit"
            title="Update class"
          />
          <ClassModal
            modalId="classAttendance"
            onSave={ form => { closeClass(classDate, form, subject._id, token) } }
            scheduleType="attendance"
            title="Class attendance"
          />
          <ConfirmModal
            modalId="removeClass"
            onConfirm={() => { deleteClass(classDate, subject._id, token) }}
            text={'Are you sure you want to delete class at ' + moment(classDate).format('DD/MM/YY - HH:mm') + '?'}
          />
        </div>
      )
    }

    return (
      <div className="subject">
        <SubjectData subject={subject} />
        <InterestedPeople groupId="subjectPage" />
        { adminButtons }
        { adminModals }
      </div>
    )
  }
}

export default SubjectPage
