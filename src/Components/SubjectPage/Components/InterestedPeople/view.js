import React from 'react'

import CollapsableList from '../../../CollapsableList'
import InterestedPeopleItem from '../InterestedPeopleItem'
import './style.css'

// Add untrained aqui
const InterestedPeople = ({ classDate, groupId, scheduleType, subject }) => {
  const generateInterestedPeopleItem = userType => user => (
    <InterestedPeopleItem
      showCheckbox={!!scheduleType}
      showDate={!scheduleType}
      user={user}
      userType={userType}
    />
  )

  const teachers = !scheduleType || scheduleType === 'new' || scheduleType === 'edit' ? subject.teachers : null
  const students = subject.students.filter(student => (
    !scheduleType ||
    (scheduleType === 'new' && !subject.users[student].studentDate) ||
    (scheduleType === 'edit' && (!subject.users[student].studentDate || subject.users[student].studentDate === classDate)) ||
    (scheduleType === 'attendance' && subject.users[student].studentDate === classDate)
  ))
  const trained = !scheduleType ? subject.trained : null

  return (
    <div className="interested-people" >
      { teachers && (
        <div className="teachers">
          <CollapsableList
            groupId={groupId}
            itemTemplate={ generateInterestedPeopleItem('teacher') }
            list={teachers}
            name="trainers"
          />
        </div>
      )}
      <div className="students">
        <CollapsableList
          groupId={groupId}
          itemTemplate={ generateInterestedPeopleItem('student') }
          list={students}
          name="students"
        />
      </div>
      { trained && (  
        <div className="trained">
          <CollapsableList
            groupId={groupId}
            itemTemplate={ generateInterestedPeopleItem('trained') }
            list={trained}
            name="attended"
          />
        </div>
      )}
    </div>
  )
}

export default InterestedPeople
