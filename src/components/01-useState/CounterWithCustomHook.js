import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          increment(2);
        }}
      >
        Sumar 1
      </button>
      <button className="btn btn-success ms-1" onClick={reset}>
        Reset
      </button>
      <button
        className="btn btn-danger ms-1"
        onClick={() => {
          decrement(2);
        }}
      >
        Restar 1
      </button>
    </>
  );
};
