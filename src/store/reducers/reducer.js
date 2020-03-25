import { 
    CHOOSE_BACKGROUND
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
        default: 
            return state
    }
}

export default Reducer