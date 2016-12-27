import { combineReducers } from 'redux';
import { INCREMENT_CURSOR } from './actions';

const initialState = {
    cursorPosition: 0
};

export function typFastrApp(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_CURSOR:
            return Object.assign({}, state, {
               cursorPosition: state.cursorPosition + 1
            });
        default:
            return state
    }
}