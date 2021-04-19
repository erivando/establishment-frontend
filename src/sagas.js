import { all } from 'redux-saga/effects'

import establishment from './components/Establishment/sagas'
import register from './components/Register/sagas'

export default function* rootSaga() {
  yield all([
    establishment(),
    register(),
  ])
}