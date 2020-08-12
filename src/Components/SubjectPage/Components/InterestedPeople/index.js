import { connect } from 'react-redux'

import InterestedPeople from './view'

const mapStateToProps = state => ({
  classDate: state.classDate,
  subject: state.subject,
})

export default connect(mapStateToProps)(InterestedPeople)
