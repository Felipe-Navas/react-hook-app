import { todoReducer } from '../../../../components/08-useReducer/todo-app/todoReducer';
import { demoTodos } from '../../../fixtures/demoTodo';

describe('Testing the todoReducer reducer', () => {
  test('should return the default state', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('should add a new TODO to the state', () => {
    const payload = {
      id: 4,
      desc: 'Aprender Jest',
      done: false,
    };
    const action = {
      type: 'add',
      payload,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(4);
    expect(state).toEqual([...demoTodos, payload]);
    expect(state[state.length - 1]).toEqual(payload);
  });

  test('should delete a TODO from the state', () => {
    const action = {
      type: 'delete',
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(2);
  });

  test('should toggle a TODO from the state', () => {
    const action = {
      type: 'toggle',
      payload: 3,
    };
    const state = todoReducer(demoTodos, action);
    const modifiedTodo = demoTodos.find((todo) => todo.id === 3);
    console.log(modifiedTodo);
    expect(state.length).toBe(3);
    expect(state[2].done).toBe(true);
  });
});
