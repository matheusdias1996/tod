import { connect } from 'react-redux'

import { updateSubjectsFilter } from '../../../../actions'
import SubjectsFilter from './view'

const mapStateToProps = state => ({
  subjectsFilter: state.subjectsFilter,
})

const mapDispatchToProps = dispatch => ({
  updateFilter: value => {
    dispatch(updateSubjectsFilter(value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsFilter)
