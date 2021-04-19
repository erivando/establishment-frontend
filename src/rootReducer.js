import { combineReducers } from 'redux'
import { establishmentReducer } from './components/Establishment/reducer'

export const rootReducer = combineReducers({
  establishment: establishmentReducer,
})
