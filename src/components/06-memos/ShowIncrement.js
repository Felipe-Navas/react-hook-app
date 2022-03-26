import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Mo volvi a generar :(');
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(50);
      }}
    >
      Increment
    </button>
  );
});
