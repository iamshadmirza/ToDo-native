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
            return { ...state, todos: state.todos.concat ([{ task: action.payload }]) };

        case 'DONE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo !== action.todo) }

        default:
            return state;
    }
}

export default createStore(todoStore);