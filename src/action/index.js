export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';
export const SHOW_TYPE = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_UNCOMPLETE: 'SHOW_UNCOMPLETE'
};

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    }
};

export const completeTodo = index => {
    return {
        type: COMPLETE_TODO,
        index
    }
};

export const setVisibility = filter => {
    return {
        type: SET_VISIBILITY,
        filter
    }
};