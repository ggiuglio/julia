import {
  CHOOSE_BACKGROUND,
  LOGIN_ERROR,
  RESET_LOGIN_ERROR,
  SET_USER
} from './actionsTypes.js'
import { FirebaseInstance } from '../../App';
import { history } from '../../App';

export const chooseBackground = () => {
  return dispatch => {
    return dispatch({
      type: CHOOSE_BACKGROUND
    })
  }
}

export const login = (username, password) => {
  return dispatch => {
    FirebaseInstance.doSignInWithEmailAndPassword(username, password)
      .then(() => {
        history.push('/julia/about')
      })
      .catch(() => {
        dispatch({
          type: LOGIN_ERROR,
          error: "Wrong username or password"
        })
      });
  }
}

export const resetLoginError = () => {
  return dispatch => {
    dispatch({
      type: RESET_LOGIN_ERROR
    });
  }
}

export const logout = () => {
  return dispatch => {
    FirebaseInstance.doSignOut()
  }
}

export const setUser = (user) => {
  return dispatch => {
    dispatch({
      type: SET_USER,
      user: user ? { email: user.email } : null
    });
  }
}