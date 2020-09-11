import React from 'react'

import SelectionList from '../../../SelectionList'

const SubjectsSort = ({ subjectsSort, updateSort }) => (
  <div className="subjects-sort">
    <SelectionList
      onChange={e => {updateSort(e.target.value)}}
      list = {[
        'Alphabetically',
        'Reversed Alphabetically',
        'By creation date',
      ]} // Change to sorters.keys()
      placeholder="Sort"
      value={subjectsSort}
    />
  </div>
)

export default SubjectsSort
