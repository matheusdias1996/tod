import React from 'react'

import './style.css'

const App = ({ dismissMessage, message }) => {
  if (!message) {
    return <div className="message empty"></div>
  }

  var classes = ['message']
  message.type && classes.push(message.type)
  message.fadingOut && classes.push('fading-out')

  return (
    <div className={classes.join(' ')}>
      <p>{message.message}</p>
      <i className="fas fa-times" onClick={dismissMessage}></i>
    </div>
  )
}

export default App
