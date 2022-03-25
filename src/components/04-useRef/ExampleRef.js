import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './effects.css';

export const ExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleHide = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Emaple useRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-4" onClick={handleHide}>
        Show/Hide
      </button>
    </div>
  );
};
