import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getMeRequest, logout, openModal } from '../../actions'
import User from './view'

const mapStateToProps = state => ({
  loggedIn: state.token !== null,
  me: state.me,
  token: state.token,
})

const mapDispatchToProps = dispatch => ({
  getMe: token => {
    dispatch(getMeRequest(token))
  },
  logout: () => {
    dispatch(logout())
  },
  openModal: () => {
    dispatch(openModal('authentication'))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))
