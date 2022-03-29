import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../../hooks/useForm';
import { TodoList } from './TodoList';
import './styles.css';

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Deploy an application',
  //     done: false,
  //   },
  // ];

  return JSON.parse(localStorage.getItem('Todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Enter a todo description"
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-success mt-1" type="submit">
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
