import * as actionTypes from './actions';

const initialState = {
    loggedin: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGGED_IN:
            return {
                loggedin: true
            }
        case actionTypes.USER_LOGGED_OUT:
            return {
                loggedin: false
            }
        default:
            return state;
    }
}

export default reducer;