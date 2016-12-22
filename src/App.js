import React, { Component } from 'react'
import configure from './store'
import { combineReducers} from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import routes from './containers'
import './App.css'


var store = configure(combineReducers({
  ...reducers,
  routing: routerReducer
}))

const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {routes(history, store)}
      </Provider>
    );
  }
}

export default App;
