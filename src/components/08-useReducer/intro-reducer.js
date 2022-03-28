/**
 * This is a simple example of the use of a reducer
 */

const initialState = [
  {
    id: 1,
    todo: 'Buy bread',
    done: false,
  },
];

/**
 *
 * @param {Object} state
 * @param {Object} action
 * @returns state
 */
const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 1,
  todo: 'Buy milk',
  done: false,
};

const action = {
  type: 'add',
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
