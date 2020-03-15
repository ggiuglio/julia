import {
  CHOOSE_BACKGROUND
} from './actionsTypes.js'
//import { FirebaseInstance } from '../../App';

export const chooseBackground = () => {
  return dispatch => {
    return dispatch({
      type: CHOOSE_BACKGROUND
    })
  }
}