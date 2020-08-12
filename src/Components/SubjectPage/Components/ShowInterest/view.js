import React, { Component } from 'react'

import './style.css'

class ShowInterest extends Component  {
  constructor(props) {
    super(props)
    this.studentRadio = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(interestType) {
    const { me, removeInterest, showInterest, subject, token } = this.props

    const callee = subject[interestType].includes(me._id) ? removeInterest : showInterest
    callee(interestType, subject._id, token)
  }

  render() {
    const { me, subject } = this.props
    const isStudent = subject.students.includes(me._id)
    const isTeacher = subject.teachers.includes(me._id)

    return (
      <div className="show-interest" onSubmit={this.handleSubmit}>
        <div className="menu">Interested?</div>
        <div className={'option-container ' + (isStudent ? 'selected' : '')}>
          <div className="option" onClick={() => {this.handleSubmit('students')}}>Student</div>
        </div>
        <div className={'option-container ' + (isTeacher ? 'selected' : '')}>
          <div className="option" onClick={() => {this.handleSubmit('teachers')}}>Teacher</div>
        </div>
      </div>
    )
  }
}

export default ShowInterest
