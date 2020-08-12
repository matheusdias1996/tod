import React from 'react'
import moment from 'moment'

import './style.css'

const InterestedPeopleItem = ({
  classes,
  fillForm,
  form,
  me,
  openModal,
  role,
  showCheckbox,
  showDate,
  subject,
  updateForm,
  user,
  userType,
}) => {
  const style = { fontWeight: user === me ? 'bold' : 'normal' }

  const DateColumn = ({ date, room, showButtons }) => (
    <div className="date" style={style}>
      { moment(date).format('DD/MM/YY - HH:mm') }
      { showButtons && (
        <div className="icons">
          <i className="fas fa-clipboard-check" onClick={() => {
            fillForm({
              date: new Date(date),
              npsURL: '',
              students: subject.students
                .filter(student => (subject.users[student].studentDate === date))
                .reduce((acc, student) => {
                  acc[student] = true
                  return acc
                }, {}),
              teachers: {},
            })
            openModal('classAttendance', date)
          }}></i>
          <i className="fas fa-pencil-alt" onClick={() => {
            fillForm({
              date: new Date(date),
              room,
              students: subject.students
                .filter(student => (
                  !subject.users[student].studentDate ||
                  subject.users[student].studentDate === date
                ))
                .reduce((acc, student) => {
                  acc[student] = subject.users[student].studentDate === date
                  return acc
                }, {}),
              teachers: subject.teachers
                .reduce((acc, teacher) => {
                  acc[teacher] = subject.users[teacher].teacherDates.includes(date)
                  return acc
                }, {}),
            })
            openModal('editClass', date)
          }}></i>
          <i className="fas fa-trash-alt" onClick={() => {openModal('removeClass', date)}}></i>
        </div>
      )}
    </div>
  )

  const firstLineDate = userType === 'trained' ? null : userType === 'teacher' ? subject.users[user].teacherDates[0] : subject.users[user].studentDate
  const filteredClasses = classes.filter(clazz => (clazz.date === firstLineDate))
  const room = filteredClasses.length > 0 ? filteredClasses[0].room : undefined

  const firstLine = (
    <div className="interested-people-item">
        <div style={style}>{ subject.users[user].name } ({ subject.users[user].email })</div>
        { showDate ?
          (firstLineDate ?
            <DateColumn
              date={firstLineDate}
              room={room}
              showButtons={firstLineDate && role === 'admin' && userType === 'teacher'}
            /> :
            <div className="date"></div>) :
          null
        }
        { showCheckbox ? (
          <div>
            <input
              checked={form[userType + 's'][user] || false}
              onChange={e => {
                updateForm(userType + 's', user, e.target.checked)
              }}
              type="checkbox"
            />
          </div>
        ) : (<div></div>)}
    </div>
  )

  const lines = []
  if ( userType === 'teacher' && showDate && subject.users[user].teacherDates.length > 1 ) {
    lines.push(React.cloneElement(firstLine, { key: subject.users[user].teacherDates[0] }))
    subject.users[user].teacherDates.slice(1).forEach(date => {
      const filteredClasses = classes.filter(clazz => (clazz.date === date))
      const room = filteredClasses.length > 0 ? filteredClasses[0].room : undefined
      lines.push(
        <div className="interested-people-item" key={date}>
          <div></div>
          <DateColumn
            date={date}
            room={room}
            showButtons={role === 'admin'}
          />
          <div></div>
        </div>
      )
    })

    return lines
  }

  return firstLine
}

export default InterestedPeopleItem
