import React from 'react'
import { Redirect} from 'react-router-dom'

import AddSubject from './Components/AddSubject'
import SubjectsFilter from './Components/SubjectsFilter'
import SubjectsList from './Components/SubjectsList'
import './style.css'

const IndexPage = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="index">
      <div className="top">
        <h1 className="light-gray"><i className="far fa-copy"></i> Subjects</h1>
        <SubjectsFilter />
      </div>
      <SubjectsList />
      <AddSubject />
    </div>
  )
}

export default IndexPage
