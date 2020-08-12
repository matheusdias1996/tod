import { connect } from 'react-redux'

import { removeInterestRequest, showInterestRequest } from '../../../../actions'
import ShowInterest from './view'

const mapStateToProps = state => ({
  me: state.me,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  removeInterest: (interestType, subjectId, token) => {
    dispatch(removeInterestRequest({ interestType, subjectId, token }))
  },
  showInterest: (interestType, subjectId, token) => {
    dispatch(showInterestRequest({ interestType, subjectId, token }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowInterest)
