import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layoutEffect.css';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pQuote = useRef();

  const [pSize, setPSize] = useState({});

  useLayoutEffect(() => {
    setPSize(pQuote.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      <div>
        <blockquote className="blockquote text-end">
          <p ref={pQuote} className="">
            {quote}
          </p>
        </blockquote>

        <pre>{JSON.stringify(pSize, null, 3)}</pre>

        <button
          className="btn btn-primary"
          onClick={() => {
            increment(2);
          }}
        >
          Next quote
        </button>
      </div>
    </div>
  );
};
