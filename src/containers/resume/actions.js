import * as actionTypes from './constants'

export function store_resume_data(data) {
  return {
    type: actionTypes.STORE_RESUME_DATA,
    data
  }
}
