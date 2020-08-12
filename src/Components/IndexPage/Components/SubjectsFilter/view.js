import React from 'react'

import TextInput from '../../../TextInput'

const SubjectsFilter = ({ subjectsFilter, updateFilter }) => (
  <div className="subjects-filter">
    <TextInput
      icon="fas fa-search"
      onChange={e => {updateFilter(e.target.value)}}
      placeholder="Filter the subjects"
      value={subjectsFilter}
    />
  </div>
)

export default SubjectsFilter
