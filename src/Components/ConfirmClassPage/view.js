import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class ConfirmClassPage extends Component {
  componentDidMount() {
    const { confirmClass, match } = this.props
    confirmClass(match.params.answer, match.params.classId, match.params.token)
  }

  render() {
    return <Redirect to="/index" />
  }
}

export default withRouter(ConfirmClassPage)
