import { all, call, takeLatest } from 'redux-saga/effects'
import { t } from 'ab18n'
import api from '../../api'
import { notification } from 'antd'
import history from '../../service/history'

function* createSaga(action) {
  try {
    yield call(api.post, '/users', action.values)
    notification.success({
      message: t('register.success'),
      duration: 2,
      onClose: () => { history.push('/login') }
    })
  } catch (error) {
    console.error(error)
    notification.error({
      message: t('register.fail'),
      duration: 2,
    })
  }
}

function* register() {
  yield all([
    takeLatest("CREATE", createSaga),
  ])
}

export default register
