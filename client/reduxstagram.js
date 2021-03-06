import React from 'react'

import { render } from 'react-dom'

// import CSS
import css from './styles/style.styl'

// import components
import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

// import react router apps
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// create an object for default state
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))