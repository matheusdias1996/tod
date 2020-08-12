import { connect } from 'react-redux'

import { fadeMessageOut } from '../../actions'
import Messages from './view'

const mapStateToProps = state => ({
  message: state.message,
})

const mapDispatchToProps = dispatch => ({
  dismissMessage: () => {
    dispatch(fadeMessageOut())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
