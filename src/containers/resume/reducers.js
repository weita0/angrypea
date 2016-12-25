import * as actionTypes from './constants'

const initialState = {
  current_step: 0
}

export function resume(state = initialState, action) {  
  switch(action.type) {
    case actionTypes.STORE_RESUME_DATA:
      if (action.step === 0) {
        return Object.assign({}, state, {
          basicinfo: action.data,
          current_step: 1
        })
      } else if (action.step === 1) {
        return Object.assign({}, state, {
          details: action.data
        })
      } else if (action.step === 2) {

      }
    default:
      return state
  }
}
