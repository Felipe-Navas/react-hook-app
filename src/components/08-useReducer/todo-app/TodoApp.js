import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
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

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo,
    };
    dispatch(action);
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
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
