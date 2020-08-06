import {
    CHOOSE_BACKGROUND,
    SET_USER,
    LOGIN_ERROR,
    RESET_LOGIN_ERROR,
    LOAD_ARTICLES,
    SET_ARTICLE_ON_EDIT,
    EDIT_ARTICLE_TITLE,
    EDIT_ARTICLE_TEXT,
    EDIT_ARTICLE_LINK,
    DELETE_ARTICLE_SUCCESS,
    EDIT_ARTICLE_SUCCESS,
    CANCEL_ARTICLE_EDIT,
    EDIT_NEW_ARTICLE_TITLE,
    EDIT_NEW_ARTICLE_TEXT,
    EDIT_NEW_ARTICLE_LINK,
    EDIT_NEW_ARTICLE_IMAGE,
    RESET_NEW_ARTICLE,
    OPEN_NEW_ARTICLE_FORM
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    test: 0,
    backgrounds: ['sea', 'elephants', 'monkey'],
    selectedBackground: '',
    articles: undefined,
    articleOnEdit: undefined,
    articleTitleEdit: undefined,
    articleTextEdit: undefined,
    articleLinkEdit: undefined,
    showNewArticleForm: false,
    newArticleTitle: undefined,
    newArticleText: undefined,
    newArticleLink: undefined,
    newArticleImage: undefined
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
                articleLinkOnEdit: undefined,
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
        case EDIT_ARTICLE_LINK: {
            return {
                ...state,
                articleLinkEdit: action.link
            }
        }
        case EDIT_ARTICLE_SUCCESS: {
            return {
                ...state,
                articleTitleEdit: undefined,
                articleTextEdit: undefined,
                articleLinkEdit: undefined,
                articleOnEdit: undefined,
            }
        }
        case CANCEL_ARTICLE_EDIT: {
            return {
                ...state,
                articleTitleEdit: undefined,
                articleTextEdit: undefined,
                articleLinkEdit: undefined,
                articleOnEdit: undefined,
            }
        }
        case EDIT_NEW_ARTICLE_TITLE: {
            return {
                ...state,
                newArticleTitle: action.title,
            }
        }
        case EDIT_NEW_ARTICLE_TEXT: {
            return {
                ...state,
                newArticleText: action.text,
            }
        }
        case EDIT_NEW_ARTICLE_LINK: {
            return {
                ...state,
                newArticleLink: action.link,
            }
        }
        case EDIT_NEW_ARTICLE_IMAGE: {
            return {
                ...state,
                newArticleImage: action.image,
            }
        }
        case OPEN_NEW_ARTICLE_FORM: {
            return {
                ...state,
                showNewArticleForm: true
            }
        }
        case RESET_NEW_ARTICLE: {
            return  {
                ...state,
                showNewArticleForm: false,
                newArticleTitle: undefined,
                newArticleText: undefined,
                newArticleLink: undefined,
                newArticleImage: undefined
            }
        }
        default:
            return state
    }
}

export default Reducer