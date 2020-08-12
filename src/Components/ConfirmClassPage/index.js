import { connect } from 'react-redux'

import { confirmClassRequest } from '../../actions'
import ConfirmClassPage from './view'

const mapDispatchToProps = dispatch => ({
  confirmClass: (answer, classId, token) => {
    dispatch(confirmClassRequest({ answer, classId, token }))
  },
})

export default connect(null, mapDispatchToProps)(ConfirmClassPage)
