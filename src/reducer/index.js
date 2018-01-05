import {combineReducers} from 'redux';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY, SHOW_TYPE} from '../action'

const todo = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state,
                {
                    text: action.text,
                    complete: false
                }];

        case COMPLETE_TODO:
            return [...state.slice(0, action.index),
                Object.assign({}, state[action.index], {complete: !state[action.index].complete}),
                ...state.slice(action.index + 1)
            ];
        default:
            return state
    }
};

const visibilityFilter = (state = SHOW_TYPE.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY:
            return action.filter;
        default:
            return state
    }
};

const userInfo = (state = [], action) => {
    switch (action.type) {
        case 'USER_INFO':
            return action.userData;
        default:
            return state
    }
};

const combineRe = combineReducers({todo, visibilityFilter,userInfo});
export default combineRe;