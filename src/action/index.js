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

const userInfo = (userData) => ({

    type: 'USER_INFO',
    userData
});

export const fetchUserInfo = (user) => (dispatch) => {
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    }).then(response => response.json())
        .then(response => {
            if (response) {
                dispatch(userInfo(response))
            }
        })
        .catch((error) => {
            dispatch(userInfo({
                data: null,
                status: false,
                username: null
            }))
        });
};