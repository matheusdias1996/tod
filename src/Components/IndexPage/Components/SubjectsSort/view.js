import React from 'react'

import SelectionList from '../../../SelectionList'

const SubjectsSort = ({ subjectsSort, updateSort }) => (
  <div className="subjects-sort">
    <SelectionList
      onChange={e => {updateSort(e.target.value)}}
      list = {[
        'Alphabetically',
        'Reversed Alphabetically'
      ]}
      placeholder="Sort"
      value={subjectsSort}
    />
  </div>
)

export default SubjectsSort
