import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import history from '../../history'
import AuthenticationPage from '../AuthenticationPage'
import ChangePasswordPage from '../ChangePasswordPage'
import ConfirmClassPage from '../ConfirmClassPage'
import ConfirmPage from '../ConfirmPage'
import ForgotPasswordPage from '../ForgotPasswordPage'
import IndexPage from '../IndexPage'
import Messages from '../Messages'
import ProfilePage from '../ProfilePage'
import SubjectPage from '../SubjectPage'
import User from '../User'
import './style.css'
import 'react-datepicker/dist/react-datepicker.css'

class App extends Component {
  componentDidMount() {
    this.unlisten = history.listen(() => {
      this.props.closeMessage()
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const { hasMessage } = this.props

    return (
      <Router history={history}>
        <div className={'app ' + (hasMessage && 'has-message') }>
          <Messages />
          <User />
          <Route path="/" exact component={AuthenticationPage} />
          <Route path="/changePassword/:token" component={ChangePasswordPage} />
          <Route path="/confirm/:token" component={ConfirmPage} />
          <Route path="/confirmClass/:classId/:token/:answer" component={ConfirmClassPage} />
          <Route path="/forgotPassword" component={ForgotPasswordPage} />
          <Route path="/index" component={IndexPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/subject/:id" component={SubjectPage} />
        </div>
      </Router>
    )
  }
}

export default App
