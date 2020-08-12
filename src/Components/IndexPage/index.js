import { connect } from 'react-redux'

import IndexPage from './view'

const mapStateToProps = state => ({
  loggedIn: state.token !== null,
})

export default connect(mapStateToProps)(IndexPage)
