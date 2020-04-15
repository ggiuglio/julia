import {
  CHOOSE_BACKGROUND,
  LOGIN_ERROR,
  RESET_LOGIN_ERROR,
  SET_USER,
  LOAD_ARTICLES,
  SET_ARTICLE_ON_EDIT
} from './actionsTypes.js'
import { FirebaseInstance } from '../../App';
import { history } from '../../App';

export const loadArticlesAction = () => {
  return dispatch => {
    return FirebaseInstance.articles.orderByChild('id').on('value', snapshot => {
      const art = JSON.parse(JSON.stringify(snapshot.val()));
      return dispatch({
        type: LOAD_ARTICLES,
        articles: art
      });
    });
  }
}

export const chooseBackgroundAction = () => {
  return dispatch => {
    return dispatch({
      type: CHOOSE_BACKGROUND
    })
  }
}

export const loginAction = (username, password) => {
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

export const resetLoginErrorAction = () => {
  return dispatch => {
    dispatch({
      type: RESET_LOGIN_ERROR
    });
  }
}

export const logoutAction = () => {
  return dispatch => {
    FirebaseInstance.doSignOut()
  }
}

export const setUserAction = (user) => {
  return dispatch => {
    dispatch({
      type: SET_USER,
      user: user ? { email: user.email } : null
    });
  }
}

export const setArticleOnEdit = (articleId) => {
  return dispatch => {
    dispatch({
      type: SET_ARTICLE_ON_EDIT,
      articleId: articleId
    });
  }
}
