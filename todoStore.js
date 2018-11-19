import { createStore } from 'redux';
const INITIAL_STATE = {
    todos: [
        {
            task: 'Initial todo',
        },
    ],
};

function todoStore(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: { task: action.payload } };

        default:
            return state;
    }
}

export default createStore(todoStore);