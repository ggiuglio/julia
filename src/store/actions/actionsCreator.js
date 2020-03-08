import {
  TEST,
  TEST_SUCCESS
} from './actionsTypes.js'
import { FirebaseInstance } from '../../App';
import { history } from '../../App';

export const teatAction = (product) => {
  return (dispatch, getState) => {
    let test = getState().test;

    dispatch(testActionSuccess(test));
  } 
}