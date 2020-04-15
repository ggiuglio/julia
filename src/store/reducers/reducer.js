import {
    CHOOSE_BACKGROUND,
    SET_USER,
    LOGIN_ERROR,
    RESET_LOGIN_ERROR,
    LOAD_ARTICLES,
    SET_ARTICLE_ON_EDIT
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    test: 0,
    backgrounds: ['sea', 'elephants', 'monkey'],
    selectedBackground: '',
    articles: undefined,
    articleOnEdit: undefined
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
            return {
                ...state,
                articles: action.articles
            }
        }
        case SET_ARTICLE_ON_EDIT: {
            return {
                ...state,
                articleOnEdit: action.articledId
            }
        }
        default:
            return state
    }
}

export default Reducer