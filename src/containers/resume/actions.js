import * as actionTypes from './constants'

export function store_resume_data(data, step) {
  return {
    type: actionTypes.STORE_RESUME_DATA,
    step,
    data
  }
}
