import React from 'react';
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

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
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
};
