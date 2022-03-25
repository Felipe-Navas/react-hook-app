import React, { useRef } from 'react';
import './effects.css';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
        type="text"
      />

      <button className="mt-2 btn btn-success" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
