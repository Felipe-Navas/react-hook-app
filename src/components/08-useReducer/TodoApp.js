import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Deploy an application',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>First task</li>
        <li>Second task</li>
        <li>Third task</li>
      </ul>
    </div>
  );
};
