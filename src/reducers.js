import { combineReducers } from 'redux';
import { INCREMENT_CURSOR } from './actions';

const initialState = {
    cursorPosition: 0,
    text: "almafa supdawg".split("").map((c, i) => {
        return {charVal: c, index: i, state: 0, isCurrent: true};
    })
};

export function typFastrApp(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_CURSOR:
            let newText = state.text.slice();

            // deinit prev letter
            let currentLetter = newText[state.cursorPosition];
            currentLetter.isCurrent = false;
            currentLetter.state =
                action.payload.key === currentLetter.charVal
                ? 1
                : 2;

            // init current letter
            newText[state.cursorPosition + 1].isCurrent = true;

            return Object.assign({}, state, {
                cursorPosition: state.cursorPosition + 1,
                text: newText
            });
        default:
            return state
    }
}