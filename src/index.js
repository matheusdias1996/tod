import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { throttle } from 'lodash'

import reducer from './reducers'
import saga from './sagas'
import initialState from './initialState'
import { loadState, saveState } from './localStorage'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'
import './index.css'

const persistedState = loadState()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  {
    ...initialState,
    ...persistedState,
  },
  applyMiddleware(sagaMiddleware)
)

store.subscribe(throttle(() => {
  const state = store.getState()
  saveState({
    me: state.me,
    token: state.token,
  })
}), 1000)

sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
