import { createStore } from 'redux';

const defaultTodos = [
    {
        task: 'Initial todo',
        state: 'pending'
    },
];

const INITIAL_STATE = {
    todos: defaultTodos,
    allTodos: defaultTodos,
    filter: 'pending',
};

function todoStore(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            const allTodos = state.todos.concat ([{ task: action.payload, state: 'pending' }]);
            return { ...state, allTodos, todos: allTodos.filter(todo => todo.state === state.filter)};

        case 'DONE_TODO':
            const doneTodo = {...action.todo, state: 'done'};
            const updatedAllTodos = state.allTodos.map((todo) => {
                return todo === action.todo ? doneTodo : todo;
            });
            return { ...state, 
                allTodos: updatedAllTodos ,
                todos:  updatedAllTodos.filter(todo => todo.state === state.filter)
            };

        case 'TOGGLE_STATE':
            const filter = state.filter === 'pending' ? 'done' : 'pending';
            return {...state, filter, 
                todos: state.allTodos.filter(todo => todo.state === filter),
            }; 

        default:
            return state;
    }
}

export default createStore(todoStore);