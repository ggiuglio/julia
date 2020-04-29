import {
    CHOOSE_BACKGROUND,
    SET_USER,
    LOGIN_ERROR,
    RESET_LOGIN_ERROR,
    LOAD_ARTICLES,
    SET_ARTICLE_ON_EDIT,
    EDIT_ARTICLE_TITLE,
    EDIT_ARTICLE_TEXT,
    DELETE_ARTICLE_SUCCESS,
    EDIT_ARTICLE_SUCCESS,
    CANCEL_ARTICLE_EDIT
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    test: 0,
    backgrounds: ['sea', 'elephants', 'monkey'],
    selectedBackground: '',
    articles: undefined,
    articleOnEdit: undefined,
    articleTitleEdit: undefined,
    articleTextEdit: undefined
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHOOSE_BACKGROUND:
            const bgIndex = Math.floor(Math.random() * Math.floor(state.backgrounds.length));
            return {
                ...state, selectedBackground: state.backgrounds[bgIndex]
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.error
            }
        }
        case RESET_LOGIN_ERROR: {
            return {
                ...state,
                loginError: ''
            }
        }
        case LOAD_ARTICLES: {
            let articles = [];
            if (action.articles) {
                Object.keys(action.articles).forEach(k => {
                    action.articles[k].firebaseId = k;
                    articles.push(action.articles[k])
                });
            }
            return {
                ...state,
                articles: articles
            }
        }
        case SET_ARTICLE_ON_EDIT: {
            return {
                ...state,
                articleOnEdit: action.articleId,
                articleTitleEdit: undefined,
                articleTextEdit: undefined,
            }
        }
        case DELETE_ARTICLE_SUCCESS: {
            return state;
        }
        case EDIT_ARTICLE_TITLE: {
            return {
                ...state,
                articleTitleEdit: action.title
            }
        }
        case EDIT_ARTICLE_TEXT: {
            return {
                ...state,
                articleTextEdit: action.text
            }
        }
        case EDIT_ARTICLE_SUCCESS: {
            return {
                ...state,
                articleTitleEdit: undefined,
                articleTextEdit: undefined,
                articleOnEdit: undefined
            }
        }
        case CANCEL_ARTICLE_EDIT: {
            return {
                ...state,
                articleTitleEdit: undefined,
                articleTextEdit: undefined,
                articleOnEdit: undefined
            }
        }
        default:
            return state
    }
}

export default Reducer