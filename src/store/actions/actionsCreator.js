import {
  TEST,
  TEST_SUCCESS
} from './actionsTypes.js'
//import { FirebaseInstance } from '../../App';

export const teatAction = (product) => {
  return (dispatch, getState) => {
    let test = getState().test;

    return dispatch({
      type: TEST_SUCCESS,
      test: test + 1
    })
  } 
}