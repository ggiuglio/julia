import {
  CHOOSE_BACKGROUND,
  LOGIN_ERROR,
  RESET_LOGIN_ERROR,
  SET_USER,
  LOAD_ARTICLES,
  SET_ARTICLE_ON_EDIT,
  DELETE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_TITLE,
  EDIT_ARTICLE_TEXT,
  EDIT_ARTICLE_SUCCESS,
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

export const deleteArticleConfirm = (articleId) => {
  return dispatch => {
    return FirebaseInstance.articles.child(articleId).remove().then(() => {
      return dispatch({
        type: DELETE_ARTICLE_SUCCESS
      })
    })
      .catch((r) => {
        console.log('error', r);
      });
  }
}

export const editArticleTitle = (title) => {
  return dispatch => {
    dispatch({
      type: EDIT_ARTICLE_TITLE,
      title: title
    });
  }
}

export const editArticleText = (text) => {
  return dispatch => {
    dispatch({
      type: EDIT_ARTICLE_TEXT,
      text: text
    });
  }
}

export const confirmArticleEdit = (articleFirebaseId) => {
  return (dispatch, getState) => {
    const article = getState().articles.find(article => article.firebaseId === articleFirebaseId);
    article.title = getState().articleTitleEdit ? getState().articleTitleEdit : article.title;
    article.text = getState().articleTextEdit ? getState().articleTextEdit : article.text;

    return FirebaseInstance.articles.child(article.firebaseId).update(article).then(() => {
      return dispatch({
        type: EDIT_ARTICLE_SUCCESS
      })
    });
  };
}
