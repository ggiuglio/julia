import { 
    TEST_SUCCESS
} from '../actions/actionsTypes'

export const INITIAL_STATE = {
  test: 0
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEST_SUCCESS:
            return {
                ...state, test: action.test
            }
        default: 
            return state
    }
}

export default Reducer