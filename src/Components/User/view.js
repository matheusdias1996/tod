import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './style.css'

const nonLoginPaths = ['changePassword', 'confirm', 'forgotPassword']

class User extends Component {
  getMe() {
    const { getMe, loggedIn, me, token } = this.props

    if (loggedIn && !me) {
      getMe(token)
    }
  }

  componentDidMount() { this.getMe() }
  componentDidUpdate() { this.getMe() }

  render() {
    const { location, loggedIn, logout, me, openModal } = this.props

    let rightContent = null
    if (nonLoginPaths.includes(location.pathname.split('/')[1])) {
      rightContent = null
    } else if (!loggedIn) {
      rightContent = <div onClick={ openModal}><i className="icontext">Sign in</i><i className="iconlogin"><i className="fas fa-door-open"></i></i></div>
    }  else if (!me) {
      rightContent = <div>Loading...</div>
    } else {
      const { name } = me
      const firstLetter = name.split(' ')[0].charAt(0).toUpperCase()
      const lastLetter = name.split(' ')[name.split(' ').length - 1].charAt(0).toUpperCase()
      rightContent = (
        <div>
          <Link to="/profile">
            <div className="icon">
              <div className="name">{ firstLetter + (name.split(' ').length > 1 && lastLetter) }</div>
            </div>
          </Link>
          <div className="icon icon-logout" onClick={logout}>
            <i className="fas fa-sign-out-alt fa-lg"></i>
          </div>
        </div>
      )
    }


    return (
      <div className="user">
        <Link to="/index"><img alt="logo" src="/images/logo_red_bain.svg" /></Link>
        { rightContent }
      </div>
    )
  }
}

export default withRouter(User)
