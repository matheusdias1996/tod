import React, { Component } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import Card from '../../../Card'
import ConfirmModal from '../../../ConfirmModal'
import sorters from '../SubjectsSort/sorters'
import './style.css'

class SubjectsList extends Component {
  componentDidMount() {
    const { getSubjects, token } = this.props

    getSubjects(token)
  }

  render() {
    const { deleteSubject, openModal, role, selectedSubject, subjects, subjectsFilter, subjectsSort, token } = this.props
    const lowerCaseFilter = subjectsFilter.toLowerCase()

    const filtered = subjects.filter(function(subject) {
      return subject.description.toLowerCase().includes(lowerCaseFilter)
        || subject.name.toLowerCase().includes(lowerCaseFilter)
    })

    const sorted = filtered.sort(sorters[subjectsSort]);

    return (
      <div className="subjects">
        { sorted.map(subject => (
          <div  key={subject._id}>
            <Card href={'/subject/' + subject._id}>
              <h5>{ subject.name }</h5>
              <LinesEllipsis
                component="p"
                maxLine="3"
                text={ subject.description}
              />
              { role === 'admin' && (
                <i className="fas fa-times" onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openModal(subject)
                }}></i>
              )}
            </Card>
          </div>
        ))}
        <ConfirmModal
          modalId="removeSubject"
          onConfirm={() => { deleteSubject(selectedSubject._id, token) }}
          text={'Are you sure you want to delete: ' + (selectedSubject && selectedSubject.name) + '?'}
        />
      </div>
    )
  }
}

export default SubjectsList
