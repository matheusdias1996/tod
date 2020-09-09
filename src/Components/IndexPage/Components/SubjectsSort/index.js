import { connect } from 'react-redux'

import { updateSubjectsSort } from '../../../../actions'
import SubjectsSort from './view'

const mapStateToProps = state => ({
  subjectsSort: state.subjectsSort,
})

const mapDispatchToProps = dispatch => ({
  updateSort: value => {
    dispatch(updateSubjectsSort(value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsSort)
