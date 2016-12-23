import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Entry from './entry'
import Resume from './resume/index'

export default function (history, store) {
  return (
    <Router history={browserHistory} >
      <Route path='/' component={Entry}>
        <IndexRoute component={Entry} />
        <Route path='resume/create' component={Resume.Form} />
        <Route path='resume/template' component={Resume.Template} />
      </Route>
    </Router>
  )
}
