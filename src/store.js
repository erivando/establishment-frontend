import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhance(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
