import { call, put, takeLatest, all } from 'redux-saga/effects'
import { t } from 'ab18n'
import api from '../../api'
import { notification } from 'antd'

function* fetchAllSaga() {
  yield put({ type: "SET_LOADING", loading: true })
  try {
    const response = yield call(api.get, '/establishments')
    yield put({ type: "SET_ALL_REDUCER", payload: response.data })
  } catch (error) {
    console.error(error)
    notification.error({
      message: t('establishment.fail'),
      duration: 2,
    })
  } finally {
    yield put({ type: "SET_LOADING", loading: false })
  }
}

function* establishment() {
  yield all([
    takeLatest("SET_ALL", fetchAllSaga)
  ])
}

export default establishment
