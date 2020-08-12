import { connect } from  'react-redux'

import { setMessage } from '../../actions'
import App from './view'

const mapStateToProps = state => ({
  hasMessage: state.message !== null
})

const mapDispatchToProps = disptach => ({
  closeMessage: () => {
    disptach(setMessage(null))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
