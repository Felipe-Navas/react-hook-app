import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;
  useEffect(() => {
    // console.log('Paso por useEffect!!!!!');
  }, []);

  useEffect(() => {
    // console.log('formState cambioo!!!!!');
  }, [formState]);

  useEffect(() => {
    // console.log('el email cambioo!!!!!');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group mb-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mb-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="youremail@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  );
};
