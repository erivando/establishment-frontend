const INITIAL_STATE = {
  data: [],
  loading: false,
}

export const establishmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ALL_REDUCER':
      return {
        ...state,
        data: action.payload,
      }
      
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading
      }
      
    default:
      return state
  }
}