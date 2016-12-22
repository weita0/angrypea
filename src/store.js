import { compose, createStore, applyMiddleware } from 'redux'
import middlewares from './middlewares'
import * as reducers from './reducers'

export default function configure(reducers, initial) {
  const store = createStore(reducers, initial, compose(
    applyMiddleware.apply(this, middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
