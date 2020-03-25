import {
    CHOOSE_BACKGROUND,
    SET_USER,
    LOGIN_ERROR,
    RESET_LOGIN_ERROR,
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
    test: 0,
    backgrounds: ['sea', 'elephants', 'monkey'],
    selectedBackground: '',
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
        default:
            return state
    }
}

export default Reducer